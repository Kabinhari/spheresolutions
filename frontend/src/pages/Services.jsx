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

      {/* SERVICE BLOCKS */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <div
                id={s.slug}
                data-testid={`service-block-${s.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-8 md:p-12 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-surface flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors shrink-0">
                        <s.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400 font-heading">0{i + 1}</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{s.title}</h2>
                      </div>
                    </div>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">{s.description}</p>
                    <Link to="/contact" data-testid={`service-cta-${s.slug}`}>
                      <Button className="mt-7 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2 px-6">
                        Discuss this service <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="lg:col-span-5 lg:border-l lg:border-slate-100 lg:pl-8">
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
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;
