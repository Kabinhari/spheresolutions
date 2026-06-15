import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Building2,
  Briefcase,
  CircleDollarSign,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Wrench,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES, STATS, IMAGES, TILE_GRADIENTS } from "@/lib/site";

const PROCESS = [
  { icon: Compass, title: "Assess", text: "We review your current Temenos estate, pain points and target outcomes." },
  { icon: Wrench, title: "Architect", text: "We design a pragmatic, standards-aligned solution and delivery roadmap." },
  { icon: Rocket, title: "Deliver", text: "We execute with proven accelerators, automation and tight governance." },
  { icon: HeartHandshake, title: "Sustain", text: "We run, support and continuously optimise your core post go-live." },
];

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 min-h-[600px] flex items-center">
        {/* Professional video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={IMAGES.hero}
          aria-hidden="true"
        >
          <source src={`${process.env.PUBLIC_URL}/media/hero.mp4`} type="video/mp4" />
        </video>
        {/* Light overlays keep the theme bright and text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur ring-1 ring-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                <ShieldCheck className="w-3.5 h-3.5" /> Temenos T24 / Transact Specialists
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
                Modern core banking,<br />
                <span className="text-brand">delivered with confidence.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                Sphere IT Solution helps banks and financial institutions architect,
                migrate, integrate and modernize their Temenos T24 / Transact platforms —
                with the rigour and governance enterprise programmes demand.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" data-testid="hero-contact-button">
                  <Button className="rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2 px-7 h-12 text-base w-full sm:w-auto shadow-lg shadow-blue-900/20">
                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services" data-testid="hero-services-button">
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-slate-200 text-slate-900 hover:border-slate-900 bg-white/80 backdrop-blur font-semibold px-7 h-12 text-base w-full sm:w-auto"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 px-5 py-4 shadow-lg">
                <p className="text-3xl font-bold text-brand font-heading">99.9%</p>
                <p className="text-xs text-slate-500 font-medium max-w-[9rem] leading-snug">
                  Support SLA attainment across managed clients
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
          <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
            Trusted by banks and financial institutions worldwide
          </p>
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {[
              { icon: Landmark, label: "Retail Banks", color: "text-blue-600" },
              { icon: Building2, label: "Corporate Banks", color: "text-indigo-600" },
              { icon: CircleDollarSign, label: "Wealth & Private", color: "text-cyan-600" },
              { icon: Briefcase, label: "FinTech & NBFI", color: "text-sky-600" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5">
                <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={1.5} />
                <span className="font-heading font-semibold text-sm text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <Reveal className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">What we do</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                End-to-end Temenos expertise
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From target-state architecture to managed support, we cover the full
                lifecycle of your core banking platform.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/services" data-testid="services-preview-all">
                <Button variant="ghost" className="text-brand hover:text-brand-hover hover:bg-brand-surface gap-2 font-semibold">
                  View all services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  to="/services"
                  data-testid={`home-service-${s.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${TILE_GRADIENTS[i % TILE_GRADIENTS.length]} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 font-heading">{s.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US PREVIEW */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <img
                src={IMAGES.architecture}
                alt="Abstract architecture representing a robust core banking foundation"
                className="rounded-3xl w-full aspect-[4/3] object-cover shadow-xl ring-1 ring-slate-200"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Why Sphere IT Solution</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Architecture-led delivery, banking-grade governance
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We pair deep Temenos T24 / Transact engineering with genuine financial-services
                domain understanding — so your programme is de-risked from day one.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "15+ years of focused core banking delivery",
                  "Proven upgrade & migration accelerators",
                  "Regulatory-grade QA and release governance",
                  "SLA-backed managed support across time zones",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/why-us" data-testid="home-why-us-link">
                <Button className="mt-8 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold gap-2 px-6">
                  Why choose us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute -left-32 top-10 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #CFFAFE, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Banking focus</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Built for the realities of core banking
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We support the full breadth of Temenos T24 / Transact functional domains — so whatever
              your programme touches, we bring hands-on expertise.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { label: "Retail Banking", c: "bg-blue-50 text-blue-700 border-blue-100" },
                { label: "Corporate Banking", c: "bg-indigo-50 text-indigo-700 border-indigo-100" },
                { label: "Payments", c: "bg-cyan-50 text-cyan-700 border-cyan-100" },
                { label: "Lending", c: "bg-sky-50 text-sky-700 border-sky-100" },
                { label: "Wealth & Private", c: "bg-teal-50 text-teal-700 border-teal-100" },
                { label: "Treasury", c: "bg-violet-50 text-violet-700 border-violet-100" },
                { label: "Regulatory Reporting", c: "bg-blue-50 text-blue-700 border-blue-100" },
              ].map((t) => (
                <span key={t.label} className={`rounded-full border px-4 py-2 text-sm font-semibold ${t.c}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-200/50 to-blue-200/50 blur-2xl" />
              <img
                src={IMAGES.data}
                alt="Abstract data network representing integrated banking systems"
                className="relative rounded-3xl w-full aspect-[4/3] object-cover shadow-xl ring-1 ring-slate-200"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand font-heading tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500 font-medium">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY APPROACH */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-y border-slate-100">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute -right-24 top-0 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #DBEAFE, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">How we deliver</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              A proven, low-risk delivery approach
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every engagement follows a disciplined model designed to protect your
              core, your data and your timelines.
            </p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-slate-200 p-7 h-full shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:shadow-xl hover:border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${TILE_GRADIENTS[i % TILE_GRADIENTS.length]} flex items-center justify-center text-white shadow-md`}>
                      <step.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-bold text-slate-100 font-heading">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 font-heading">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner sideImage={IMAGES.team} />
    </div>
  );
};

export default Home;
