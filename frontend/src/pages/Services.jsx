import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES } from "@/lib/site";

const Services = () => {
  return (
    <div data-testid="services-page">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Our Services</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
              Full-lifecycle Temenos T24 / Transact services.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              Whatever stage your core banking journey is at, we have the specialists and the
              accelerators to move you forward — safely and predictably.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE BLOCKS — sticky stacking deck */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              className="sticky pb-6"
              style={{ top: `${100 + i * 18}px` }}
            >
              <div
                id={s.slug}
                data-testid={`service-block-${s.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl shadow-slate-900/5 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
              >
                {/* Accent left bar */}
                <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand to-brand-light" />
                {/* Decorative glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, #E6F0FA, transparent 70%)" }}
                />
                {/* Large watermark number */}
                <span className="pointer-events-none absolute right-6 top-2 font-heading font-bold text-[7rem] leading-none text-slate-50 select-none">
                  0{i + 1}
                </span>

                <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform shrink-0">
                        <s.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Service 0{i + 1}</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{s.title}</h2>
                      </div>
                    </div>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">{s.description}</p>
                    <Link to="/contact" data-testid={`service-cta-${s.slug}`}>
                      <Button className="mt-7 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2 px-6">
                        Discuss this service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-slate-50/80 border border-slate-100 p-6 group-hover:bg-brand-surface/60 group-hover:border-blue-100 transition-colors">
                      <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Outcomes for your bank</p>
                      <ul className="mt-4 space-y-3.5">
                        {s.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                            <span className="text-slate-700 font-medium">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;
