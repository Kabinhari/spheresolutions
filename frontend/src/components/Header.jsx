import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/why-us", label: "Why Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-18 items-center justify-between py-3.5">
          <Link to="/" data-testid="logo-link" className="text-slate-900">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-brand bg-brand-surface"
                      : "text-slate-600 hover:text-brand"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={CONTACT.calendlyUrl} data-testid="header-book-consultation">
              <Button className="rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2 px-5">
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </Button>
            </a>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-900 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-b border-slate-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive ? "text-brand bg-brand-surface" : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={CONTACT.calendlyUrl} data-testid="mobile-book-consultation" className="mt-2">
              <Button className="w-full rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2">
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
