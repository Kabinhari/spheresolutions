import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, SERVICES } from "@/lib/site";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white text-slate-600">
      {/* Subtle background watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden"
      >
        <span className="font-heading font-bold tracking-tighter text-brand/[0.05] text-[26vw] leading-[0.8] translate-y-[18%] whitespace-nowrap">
          sphereit
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="text-slate-900">
              <Logo />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 max-w-xs">
              Specialist Temenos T24 / Transact consulting for banks and financial
              institutions — architecture, migration, integration and managed support.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-heading font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link data-testid="footer-link-home" to="/" className="hover:text-brand transition-colors">Home</Link></li>
              <li><Link data-testid="footer-link-about" to="/about" className="hover:text-brand transition-colors">About</Link></li>
              <li><Link data-testid="footer-link-why-us" to="/why-us" className="hover:text-brand transition-colors">Why Us</Link></li>
              <li><Link data-testid="footer-link-services" to="/services" className="hover:text-brand transition-colors">Services</Link></li>
              <li><Link data-testid="footer-link-contact" to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-heading font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="hover:text-brand transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-heading font-semibold text-sm mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-brand shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-brand transition-colors">{CONTACT.phone}</a>
              </li>
              {CONTACT.offices.map((o) => (
                <li key={o.city} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand shrink-0" />
                  <span>{o.city} — {o.lines[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} Sphere IT Solution. All rights reserved.</p>
          <p>Temenos T24 / Transact Consulting · London · Singapore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
