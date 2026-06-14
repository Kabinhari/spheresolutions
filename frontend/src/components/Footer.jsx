import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, SERVICES } from "@/lib/site";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="text-white">
              <Logo mono />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-xs">
              Specialist Temenos T24 / Transact consulting for banks and financial
              institutions — architecture, migration, integration and managed support.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link data-testid="footer-link-home" to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link data-testid="footer-link-about" to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link data-testid="footer-link-why-us" to="/why-us" className="hover:text-white transition-colors">Why Us</Link></li>
              <li><Link data-testid="footer-link-services" to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link data-testid="footer-link-contact" to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-semibold text-sm mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand-light shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-brand-light shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{CONTACT.phone}</a>
              </li>
              {CONTACT.offices.map((o) => (
                <li key={o.city} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-light shrink-0" />
                  <span>{o.city} — {o.lines[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-10 select-none">
          <div className="font-heading font-bold text-slate-800 text-[14vw] leading-none tracking-tighter overflow-hidden">
            SPHERE IT
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} Sphere IT Solution. All rights reserved.</p>
          <p>Temenos T24 / Transact Consulting · London · Singapore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
