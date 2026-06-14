import React from "react";
import {
  BadgeCheck,
  Landmark,
  DraftingCompass,
  GitBranch,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { IMAGES } from "@/lib/site";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Deep Temenos T24 / Transact experience",
    text: "Our consultants live and breathe Temenos. From legacy R-releases to the latest Transact, we know the product, the upgrade paths and the pitfalls — so you don't discover them the hard way.",
  },
  {
    icon: Landmark,
    title: "Genuine financial-services domain understanding",
    text: "We speak the language of banking — accounting, payments, lending, regulatory reporting and risk. That context turns technical delivery into real business outcomes.",
  },
  {
    icon: DraftingCompass,
    title: "Architecture-led delivery",
    text: "Every engagement starts with sound architecture. We design for resilience, performance and maintainability before a single line of configuration changes.",
  },
  {
    icon: GitBranch,
    title: "Migration & modernization capability",
    text: "Upgrades, re-platforming and cloud modernization are core to what we do. Our accelerators and automation de-risk even the most complex transitions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability, governance & QA",
    text: "Banking-grade governance, automated regression and rigorous release management protect every go-live and keep auditors and regulators comfortable.",
  },
  {
    icon: Clock,
    title: "Always-on managed support",
    text: "SLA-backed support across time zones keeps your core healthy long after launch, with proactive monitoring and continuous optimisation.",
  },
];

const COMPARE = [
  "Temenos-only focus, not a generalist SI",
  "Senior, hands-on consultants — no bait-and-switch",
  "Reusable accelerators that compress timelines",
  "Transparent governance and reporting",
  "Fixed-scope or managed-capacity engagement models",
  "Knowledge transfer baked into every project",
];

const WhyUs = () => {
  return (
    <div data-testid="why-us-page">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Why Sphere IT Solution</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
              The trusted choice for Temenos programmes.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              Banks choose Sphere IT Solution when the stakes are high and the margin for error is
              low. Here is what sets our delivery apart.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={IMAGES.security}
              alt="3D glass shield representing trust, security and governance"
              className="rounded-3xl w-full aspect-[4/3] object-cover shadow-xl ring-1 ring-slate-200"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* REASONS GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 h-full hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand">
                    <r.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 font-heading">{r.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON / DIFFERENTIATORS */}
      <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, #0A438C, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-light">The difference</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Specialists, not generalists
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              We don't try to be everything to everyone. Our singular focus on Temenos T24 / Transact
              means deeper expertise, fewer surprises and faster, more reliable delivery.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4">
              {COMPARE.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-light mt-0.5 shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default WhyUs;
