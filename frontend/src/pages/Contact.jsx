import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/Reveal";
import { CONTACT, SERVICES } from "@/lib/site";

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "General Enquiry"];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  botcheck: "", // honeypot (Web3Forms)
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name";
    if (!form.company.trim()) e.company = "Please enter your company";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid work email";
    if (!/^[0-9+\-\s()]{5,40}$/.test(form.phone)) e.phone = "Please enter a valid phone number";
    if (!form.service) e.service = "Please select a service";
    if (form.message.trim().length < 10) e.message = "Please add a few more details (min 10 characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New website enquiry — ${form.service || "General Enquiry"}`,
        from_name: "Sphere IT Solution Website",
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        service: form.service || "General Enquiry",
        message: form.message,
        botcheck: form.botcheck,
      };
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        toast.success("Thank you — we'll be in touch shortly.");
        setForm(initialForm);
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Contact</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
              Let's talk about your core banking goals.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              Tell us a little about your Temenos T24 / Transact challenge and a specialist will
              get back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* INFO */}
            <Reveal className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#0A6BD8] via-[#1597E5] to-[#22D3EE] text-white p-8 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-15" />
                <div className="relative">
                  <h2 className="text-2xl font-bold font-heading">Contact details</h2>
                  <p className="mt-2 text-white/90 text-sm">
                    Prefer to reach out directly? We're here to help.
                  </p>
                  <div className="mt-7 space-y-5">
                    <a href={`mailto:${CONTACT.email}`} data-testid="contact-email-link" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Email</p>
                        <p className="font-medium group-hover:text-white/80 transition-colors">{CONTACT.email}</p>
                      </div>
                    </a>
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} data-testid="contact-phone-link" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Phone</p>
                        <p className="font-medium group-hover:text-white/80 transition-colors">{CONTACT.phone}</p>
                      </div>
                    </a>
                    {CONTACT.offices.map((o) => (
                      <div key={o.city} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-white/70">{o.city} Office</p>
                          <p className="font-medium text-white/90 text-sm leading-relaxed">{o.lines.join(", ")}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <div data-testid="contact-success" className="py-16 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-brand-surface flex items-center justify-center text-brand">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-slate-900 font-heading">Thank you!</h2>
                    <p className="mt-3 text-slate-600 max-w-md mx-auto">
                      Your enquiry has been received. A Temenos specialist from Sphere IT Solution
                      will get back to you within one business day.
                    </p>
                    <Button
                      data-testid="contact-send-another"
                      variant="outline"
                      className="mt-7 rounded-full border-2 border-slate-200 hover:border-slate-900"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} data-testid="contact-form" noValidate>
                    <h2 className="text-2xl font-bold text-slate-900 font-heading">Send us a message</h2>
                    <p className="mt-2 text-slate-600">Fields marked are required.</p>

                    {/* Honeypot (hidden) */}
                    <input
                      type="text"
                      name="botcheck"
                      value={form.botcheck}
                      onChange={(e) => update("botcheck", e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="mt-7 grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-slate-700 font-medium">Full name *</Label>
                        <Input
                          id="name"
                          data-testid="contact-input-name"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Jane Doe"
                          className="mt-2 h-11"
                        />
                        {errors.name && <p data-testid="error-name" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-slate-700 font-medium">Company *</Label>
                        <Input
                          id="company"
                          data-testid="contact-input-company"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="Acme Bank"
                          className="mt-2 h-11"
                        />
                        {errors.company && <p data-testid="error-company" className="mt-1.5 text-sm text-red-600">{errors.company}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-700 font-medium">Work email *</Label>
                        <Input
                          id="email"
                          type="email"
                          data-testid="contact-input-email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="jane@acmebank.com"
                          className="mt-2 h-11"
                        />
                        {errors.email && <p data-testid="error-email" className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-slate-700 font-medium">Phone *</Label>
                        <Input
                          id="phone"
                          data-testid="contact-input-phone"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+1 555 018 2400"
                          className="mt-2 h-11"
                        />
                        {errors.phone && <p data-testid="error-phone" className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="mt-5">
                      <Label className="text-slate-700 font-medium">Service of interest *</Label>
                      <Select value={form.service} onValueChange={(v) => update("service", v)}>
                        <SelectTrigger data-testid="contact-select-service" className="mt-2 h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt} data-testid={`service-option-${opt.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p data-testid="error-service" className="mt-1.5 text-sm text-red-600">{errors.service}</p>}
                    </div>

                    <div className="mt-5">
                      <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        data-testid="contact-input-message"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Tell us about your Temenos T24 / Transact challenge or project..."
                        rows={5}
                        className="mt-2 resize-none"
                      />
                      {errors.message && <p data-testid="error-message" className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      data-testid="contact-submit-button"
                      disabled={submitting}
                      className="mt-7 w-full rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2 h-12 text-base"
                    >
                      {submitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Enquiry</>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
