// app/about/page.tsx
"use client";

import Link from "next/link";
import { TbPlant, TbHeartHandshake, TbBulb, TbWorld, TbArrowRight } from "react-icons/tb";

export default function AboutPage() {
  const VALUES = [
    {
      icon: <TbPlant className="text-2xl text-[#0D9488]" />,
      title: "Botanical Accuracy",
      desc: "Every watering, lighting, and soil guideline is verified by horticulturists and experienced indoor plant enthusiasts.",
    },
    {
      icon: <TbHeartHandshake className="text-2xl text-[#034B8E]" />,
      title: "Community First",
      desc: "We empower everyday people to turn urban apartments into thriving green spaces without fear of failing.",
    },
    {
      icon: <TbBulb className="text-2xl text-amber-500" />,
      title: "Simplified Care",
      desc: "Complex plant care schedules translated into easy-to-follow daily action steps and visual diagnostic guides.",
    },
    {
      icon: <TbWorld className="text-2xl text-emerald-600" />,
      title: "Sustainable Living",
      desc: "Promoting non-toxic pest treatments, eco-friendly soil mediums, and sustainable plant propagation practices.",
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-800">
      {/* FULL PAGE CLEAR BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/background.png')` }}
      />

      <main className="relative z-10 py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* HERO SECTION */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] bg-emerald-50/90 px-4 py-1.5 rounded-full border border-emerald-100">
            About Greenzi
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#034B8E] tracking-tight">
            Cultivating Confident Plant Parents Everywhere
          </h1>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Greenzi was built to bridge the gap between complex botanical research and everyday houseplant care.
          </p>
        </section>

        {/* MISSION CARD */}
        <section className="bg-white/95 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Mission</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Indoor plants enrich our living spaces, purify our air, and bring calm to modern lives. However, conflicting advice online often leads to overwatered roots, sun-scorched leaves, and frustrated owners.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Greenzi, we curate clear, step-by-step plant care profiles, diagnostic tools, and watering reminders tailored to your specific indoor conditions—so anyone can grow a healthy indoor jungle.
          </p>
        </section>

        {/* CORE VALUES */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA CARD */}
        <section className="bg-white/95 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#034B8E]">Ready to Start Your Plant Journey?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Explore our curated catalog of beginner-friendly and tropical species complete with tailored care guidelines.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/plants"
              className="px-7 py-3.5 rounded-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold text-sm flex items-center gap-2 shadow-md transition-all"
            >
              <span>Explore Plants</span>
              <TbArrowRight className="text-lg" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}