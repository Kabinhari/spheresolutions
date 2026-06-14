from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import re
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import List, Optional, Annotated, Any
from pydantic import BeforeValidator
from bson import ObjectId
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(title="Sphere IT Solution API")
api_router = APIRouter(prefix="/api")


# ---- Mongo helpers -----------------------------------------------------------
def _validate_object_id(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(_validate_object_id)]


class BaseDocument(BaseModel):
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    model_config = {"populate_by_name": True, "arbitrary_types_allowed": True}

    @classmethod
    def from_mongo(cls, doc: dict):
        if not doc:
            return None
        return cls(**doc)

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True, exclude_none=True)
        data.pop("_id", None)
        return data


# ---- Models ------------------------------------------------------------------
SERVICES = [
    "T24 / Transact Architecture",
    "Migration / Upgrade",
    "Integration / API",
    "Cloud Modernization",
    "Managed Support",
    "Testing / QA",
    "General Enquiry",
]


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    company: str = Field(..., min_length=1, max_length=160)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=40)
    service: str = Field(..., max_length=120)
    message: str = Field(..., min_length=10, max_length=4000)
    # Honeypot field for basic spam protection
    website: Optional[str] = Field(default="", max_length=200)

    @field_validator("name", "company", "phone", "message")
    @classmethod
    def not_blank(cls, v: str):
        if not v or not v.strip():
            raise ValueError("This field cannot be empty")
        return v.strip()

    @field_validator("phone")
    @classmethod
    def valid_phone(cls, v: str):
        if not re.match(r"^[0-9+\-\s()]{5,40}$", v):
            raise ValueError("Invalid phone number")
        return v


class Contact(BaseDocument):
    contact_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str
    email: str
    phone: str
    service: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactResponse(BaseModel):
    success: bool
    message: str
    contact_id: str


# ---- Routes ------------------------------------------------------------------
@api_router.get("/")
async def root():
    return {"message": "Sphere IT Solution API", "status": "ok"}


@api_router.get("/services")
async def list_services():
    return {"services": SERVICES}


@api_router.post("/contact", response_model=ContactResponse)
async def create_contact(payload: ContactCreate):
    # Honeypot: silently accept but ignore bots
    if payload.website:
        logger.info("Spam submission blocked via honeypot")
        return ContactResponse(success=True, message="Thank you for reaching out.", contact_id="ignored")

    contact = Contact(
        name=payload.name,
        company=payload.company,
        email=str(payload.email),
        phone=payload.phone,
        service=payload.service or "General Enquiry",
        message=payload.message,
    )
    doc = contact.to_mongo()
    await db.contacts.insert_one(doc)
    logger.info(f"New contact enquiry from {contact.email} ({contact.company})")

    # NOTE: Email notifications are a placeholder for now (per requirement).
    # Enquiry is stored in MongoDB and can be wired to Resend/SendGrid later.
    return ContactResponse(
        success=True,
        message="Thank you. Our team will get back to you within one business day.",
        contact_id=contact.contact_id,
    )


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    docs = await db.contacts.find().sort("created_at", -1).to_list(1000)
    return [Contact.from_mongo(d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
