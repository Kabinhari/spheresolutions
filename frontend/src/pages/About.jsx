import React from "react";
import { Target, Compass, Award, Users, Banknote, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { IMAGES, STATS, TILE_GRADIENTS } from "@/lib/site";

const VALUES = [
  { icon: Award, title: "Excellence", text: "We hold every release to banking-grade standards of quality and security." },
  { icon: Users, title: "Partnership", text: "We work as an extension of your team, transparent and accountable throughout." },
  { icon: Layers, title: "Pragmatism", text: "We favour proven, maintainable solutions over unnecessary complexity." },
  { icon: Compass, title: "Ownership", text: "We take end-to-end responsibility for outcomes, not just activity." },
];

const About = () => {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">About Sphere IT Solution</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
              A consulting partner built around core banking.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              Sphere IT Solution is a specialist Temenos T24 / Transact consultancy. We exist to help
              banks and financial institutions run, modernize and transform their core platforms —
              with the depth, discipline and domain understanding that mission-critical systems demand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <img
              src={IMAGES.team}
              alt="Sphere IT Solution consulting team in a corporate meeting"
              className="rounded-3xl w-full aspect-[16/7] object-cover shadow-xl ring-1 ring-slate-200"
              loading="lazy"
            />
          </Reveal>
          <div className="mt-16 grid lg:grid-cols-3 gap-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Our story</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2 space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded by core banking practitioners, Sphere IT Solution was created to do one thing
                exceptionally well: deliver Temenos T24 / Transact programmes that succeed. Over more
                than fifteen years, our team has architected, migrated and supported core platforms for
                retail, corporate and private banks across multiple regions.
              </p>
              <p>
                We have seen what makes core banking programmes succeed — and what makes them fail.
                That experience is distilled into our accelerators, governance models and delivery
                playbooks, so every client benefits from lessons earned across dozens of engagements.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md mb-5">
              <Target className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our mission</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              To be the most trusted Temenos T24 / Transact delivery partner for banks and financial
              institutions — making core modernization predictable, secure and genuinely value-driven.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-400 text-white shadow-md mb-5">
              <Banknote className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our specialization</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We focus exclusively on the Temenos ecosystem. That depth means we understand not just
              the technology, but the regulatory, operational and data realities of running a core
              banking platform in production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY IMAGE */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-200/50 to-cyan-200/50 blur-2xl" />
              <img
                src={IMAGES.architecture}
                alt="Abstract blue architecture representing robust core banking foundations"
                className="relative rounded-3xl w-full aspect-[16/6] object-cover shadow-xl ring-1 ring-slate-200"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand font-heading tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500 font-medium">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-brand">Our values</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The principles behind every engagement
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${TILE_GRADIENTS[i % TILE_GRADIENTS.length]} flex items-center justify-center text-white shadow-md`}>
                    <v.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 font-heading">{v.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default About;
