import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

export const CTABanner = () => {
  return (
    <section data-testid="cta-banner" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 md:px-16 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, #00A3FF, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-light">
              Start the conversation
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Ready to modernize your Temenos core?
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Talk to a Temenos T24 / Transact specialist about your architecture,
              migration or modernization goals. No obligation — just expert guidance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" data-testid="cta-contact-button">
                <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold gap-2 px-7 h-12 text-base w-full sm:w-auto">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={CONTACT.calendlyUrl} data-testid="cta-book-button">
                <Button
                  variant="outline"
                  className="rounded-full bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold gap-2 px-7 h-12 text-base w-full sm:w-auto"
                >
                  <CalendarCheck className="w-4 h-4" /> Book a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
