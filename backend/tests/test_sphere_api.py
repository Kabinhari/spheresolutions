"""Backend API tests for Sphere IT Solution corporate site."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://sphere-banking-hub.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ------------------------------------------------------------------
class TestHealth:
    def test_root_health(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "Sphere" in data.get("message", "")


# ---- Services ----------------------------------------------------------------
class TestServices:
    def test_list_services(self, client):
        r = client.get(f"{API}/services")
        assert r.status_code == 200
        data = r.json()
        assert "services" in data
        assert isinstance(data["services"], list)
        assert len(data["services"]) >= 6
        # Ensure expected entries exist
        assert any("T24" in s for s in data["services"])
        assert "General Enquiry" in data["services"]


# ---- Contact submission -------------------------------------------------------
class TestContact:
    valid_payload = {
        "name": "TEST_Jane Doe",
        "company": "TEST_Acme Bank",
        "email": "test_jane@acmebank.com",
        "phone": "+1 555 018 2400",
        "service": "T24 / Transact Architecture",
        "message": "We are evaluating a migration of our core banking system, please reach out."
    }

    def test_create_contact_success(self, client):
        r = client.post(f"{API}/contact", json=self.valid_payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True
        assert "contact_id" in data
        assert data["contact_id"] != "ignored"
        assert isinstance(data["message"], str)
        # Save for later use
        TestContact.created_contact_id = data["contact_id"]

    def test_contact_persisted_in_list(self, client):
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        contacts = r.json()
        assert isinstance(contacts, list)
        ids = [c.get("contact_id") for c in contacts]
        assert getattr(TestContact, "created_contact_id", None) in ids
        # Validate stored fields
        found = next(c for c in contacts if c.get("contact_id") == TestContact.created_contact_id)
        assert found["name"] == self.valid_payload["name"]
        assert found["company"] == self.valid_payload["company"]
        assert found["email"] == self.valid_payload["email"]
        assert found["service"] == self.valid_payload["service"]

    def test_invalid_email_returns_422(self, client):
        payload = {**self.valid_payload, "email": "not-an-email"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_missing_required_field_returns_422(self, client):
        payload = {**self.valid_payload}
        payload.pop("company")
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_short_message_returns_422(self, client):
        payload = {**self.valid_payload, "message": "short"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_invalid_phone_returns_422(self, client):
        payload = {**self.valid_payload, "phone": "abc"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_short_name_returns_422(self, client):
        payload = {**self.valid_payload, "name": "A"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_honeypot_silently_accepted_not_stored(self, client):
        payload = {**self.valid_payload,
                   "email": "test_spam_bot@acmebank.com",
                   "website": "http://spam.example.com"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["success"] is True
        # contact_id returned is "ignored" per implementation
        assert data["contact_id"] == "ignored"

        # Verify not in DB list
        lst = client.get(f"{API}/contact").json()
        emails = [c.get("email") for c in lst]
        assert "test_spam_bot@acmebank.com" not in emails
