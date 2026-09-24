// app/care-tips/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  TbSun, 
  TbDroplet, 
  TbPlant, 
  TbTemperature, 
  TbSparkles, 
  TbChevronDown, 
  TbSearch 
} from "react-icons/tb";

export default function CareTipsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const CARE_GUIDES = [
    {
      title: "Lighting Essentials",
      icon: <TbSun className="text-2xl text-amber-500" />,
      category: "Lighting",
      summary: "Understand direct vs. indirect bright light and how to position your plants based on window direction.",
      details: "East-facing windows give gentle morning light, ideal for delicate foliage. South and West-facing windows provide intense direct sunlight suitable for cacti and succulents, while North-facing windows provide low, consistent light.",
    },
    {
      title: "Watering Routines & Moisture",
      icon: <TbDroplet className="text-2xl text-teal-500" />,
      category: "Watering",
      summary: "Learn the finger test, deep soaking methods, and how season changes affect hydration needs.",
      details: "Always test soil moisture 2 inches down before watering. Overwatering is the #1 killer of houseplants—ensure pots have drainage holes and never let roots sit in standing excess water.",
    },
    {
      title: "Temperature & Humidity Control",
      icon: <TbTemperature className="text-2xl text-blue-500" />,
      category: "Environment",
      summary: "Keep tropical plants happy with optimal indoor temperature ranges and humidity hacks.",
      details: "Most houseplants thrive between 65°F–80°F (18°C–27°C). Protect plants from cold drafts near air vents or leaky window sills in winter, and group tropical plants together to boost humidity naturally.",
    },
    {
      title: "Soil Composition & Fertilizing",
      icon: <TbPlant className="text-2xl text-emerald-600" />,
      category: "Soil & Growth",
      summary: "Choosing the right potting mix, repotting intervals, and feeding schedules during spring/summer.",
      details: "Use well-draining soil mixes rich in perlite and bark for monstera and pothos. Feed with diluted liquid fertilizer once a month during spring and summer, and pause feeding during winter dormancy.",
    },
  ];

  const COMMON_ISSUES = [
    { q: "Why are my plant's leaves turning yellow?", a: "Yellowing leaves are usually caused by overwatering, poor drainage, or natural aging of lower leaves. Check the soil moisture first; if wet, allow it to dry completely." },
    { q: "What causes brown, crunchy leaf tips?", a: "Brown crispy edges usually mean low humidity, under-watering, or mineral buildup from tap water. Try using filtered water or increasing room humidity with a humidifier." },
    { q: "How do I deal with common houseplant pests like fungus gnats?", a: "Allow the top layer of soil to dry out between waterings, use yellow sticky traps for adult gnats, and treat soil with diluted neem oil or Mosquito Bits." },
  ];

  const filteredGuides = CARE_GUIDES.filter(
    (g) =>
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen text-slate-800">
      {/* FULL PAGE CLEAR BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/background.png')` }}
      />

      <main className="relative z-10 py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* HEADER SECTION */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50/90 text-[#0D9488] border border-emerald-100 shadow-sm">
            <TbSparkles className="text-[#0D9488] text-base" />
            <span>Expert Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#034B8E] tracking-tight">
            Houseplant Care Guides & Diagnostics
          </h1>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Everything you need to keep your houseplants green, thriving, and resilient year-round.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto pt-4">
            <TbSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input
              type="text"
              placeholder="Search guides (e.g. watering, yellow leaves, soil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/95 border border-slate-200/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-sm text-slate-800 placeholder-slate-400"
            />
          </div>
        </section>

        {/* CARE GUIDES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGuides.map((guide, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 rounded-2xl bg-white/95 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  {guide.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-100">
                  {guide.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{guide.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{guide.summary}</p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#034B8E] block mb-1">Key Advice:</strong>
                {guide.details}
              </div>
            </div>
          ))}
        </section>

        {/* COMMON TROUBLESHOOTING / FAQS */}
        <section className="max-w-3xl mx-auto bg-white/95 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Troubleshooting Common Symptoms</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Quick fixes for yellow leaves, brown tips, and pests.</p>
          </div>

          <div className="space-y-3 pt-2">
            {COMMON_ISSUES.map((issue, idx) => (
              <div key={idx} className="border border-slate-200/80 rounded-xl overflow-hidden bg-white/80">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span>{issue.q}</span>
                  <TbChevronDown className={`text-xl text-slate-400 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {issue.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}