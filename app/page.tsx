// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbPlant, TbSun, TbDroplet, TbSparkles, TbChevronDown, TbArrowRight } from "react-icons/tb";
import { FiArrowRight, FiShield } from "react-icons/fi";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const FEATURED_PLANTS = [
    {
      id: "monstera",
      name: "Monstera Deliciosa",
      category: "Tropical",
      light: "Bright, Indirect Light",
      watering: "Every 1–2 Weeks",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
      badge: "Best Seller",
      badgeColor: "bg-[#0D9488] text-white",
    },
    {
      id: "snake",
      name: "Snake Plant",
      category: "Succulent",
      light: "Low to Bright Light",
      watering: "Every 2–3 Weeks",
      image: "https://images.unsplash.com/photo-1599598425947-020645557002?q=80&w=800&auto=format&fit=crop",
      badge: "Hardy",
      badgeColor: "bg-amber-500 text-white",
    },
    {
      id: "peace",
      name: "Peace Lily",
      category: "Flowering",
      light: "Medium, Indirect",
      watering: "Weekly",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=800&auto=format&fit=crop",
      badge: "Air Purifier",
      badgeColor: "bg-[#034B8E] text-white",
    },
    {
      id: "pothos",
      name: "Golden Pothos",
      category: "Vining",
      light: "Low to Bright Light",
      watering: "Every 1–2 Weeks",
      image: "https://images.unsplash.com/photo-1596724803565-38827732a39a?q=80&w=800&auto=format&fit=crop",
      badge: "Beginner",
      badgeColor: "bg-[#0D9488] text-white",
    },
  ];

  const TESTIMONIALS = [
    { name: "Sarah Jenkins", role: "Urban Gardener", text: "Greenzi completely transformed my apartment. I used to kill every succulent I bought, but their moisture schedules and lighting guides have kept my indoor jungle thriving!" },
    { name: "David Chen", role: "Plant Enthusiast", text: "The diagnostic tool is a lifesaver. When my Fiddle Leaf Fig started dropping leaves, Greenzi pinpointed the exact draft issue immediately." },
    { name: "Elena Rodriguez", role: "Interior Designer", text: "I recommend Greenzi to all my clients. Not only does it help them select pet-safe plants, but the seasonal care matrix keeps spaces vibrant." },
  ];

  const FAQS = [
    { q: "How do I know when my plant genuinely needs water?", a: "Insert your index finger about 2 inches deep into the soil. If it feels dusty and dry, it's time to water. If it's damp, wait a few more days." },
    { q: "What does 'bright indirect light' actually look like?", a: "Imagine sitting by a large east or west-facing window where you can comfortably read a book without direct sunlight hitting the pages." },
    { q: "Can I reverse root rot once it starts?", a: "Yes! Remove the plant from its pot, trim away mushy dark roots with sterilized shears, spray remaining roots with diluted hydrogen peroxide, and repot in fresh soil." },
  ];

  return (
    <div className="relative min-h-screen text-slate-800">
      
      {/* 1. FIXED, FULL-PAGE CLEAR BACKGROUND IMAGE (NO BLUR, NO REPEAT) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/hero.png')` }}
      />

      {/* PAGE CONTENT CONTAINER (POSITIONED ABOVE FIXED BACKGROUND) */}
      <main className="relative z-10">

        {/* HERO SECTION - Completely Transparent Background */}
        <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50/90 text-[#0D9488] border border-emerald-100 shadow-sm">
                <TbSparkles className="text-[#0D9488] text-base" />
                <span>Your Ultimate Plant Care Companion</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-[#034B8E]">Bring Nature <br />Indoors</span>
                <br />
                <span className="text-[#0D9488]">Without the <br />Guesswork.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-medium">
                Discover easy-to-follow indoor plant care guides, tailored light & watering schedules, and diagnostic tips to keep your indoor jungle thriving.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/plants"
                  className="px-6 py-3.5 rounded-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <TbPlant className="text-lg" />
                  <span>Explore Plant Catalog</span>
                </Link>
                <Link
                  href="/care-tips"
                  className="px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-slate-800 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm border border-slate-200/80"
                >
                  <span>Read Care Guides</span>
                  <FiArrowRight className="text-slate-500" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/60 max-w-lg">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#034B8E]">150+</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">Plant Species</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0D9488]">98%</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">Survival Rate</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#034B8E]">10k+</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">Happy Gardeners</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/80 border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
                  alt="Lush Succulents and Cacti"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Floating Reminder Card - Crisp White */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0D9488] text-white flex items-center justify-center shrink-0">
                    <TbDroplet className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#034B8E]">Watering Reminder</p>
                    <p className="text-xs text-slate-500">Monstera needs water today</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES SECTION - Semi-Transparent White Overlay with Border */}
        <section className="py-20 bg-white/70 backdrop-brightness-95 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] bg-emerald-50/90 px-3 py-1 rounded-full border border-emerald-100">
                The Greenzi Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Smart Care Made Simple
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <TbPlant />, title: "Botanical Library", desc: "Detailed profiles on light, soil composition, and watering intervals for 150+ indoor species." },
                { icon: <TbDroplet />, title: "Tailored Hydration", desc: "Custom schedules based on your pot size, climate, and plant growth phase." },
                { icon: <FiShield />, title: "Pet-Safe Filters", desc: "Easily verify toxicity status to keep cats, dogs, and children safe." },
                { icon: <TbSparkles />, title: "Plant Diagnostics", desc: "Quick visual lookup for yellowing leaves, pests, and root care solutions." },
              ].map((feat, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0D9488] flex items-center justify-center text-2xl mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED CATALOG - Transparent Background with Solid Cards */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] block mb-2">Curated Selection</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Featured Houseplants</h2>
            </div>
            <Link 
              href="/plants" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D9488] hover:text-[#0f766e]"
            >
              <span>View All Plants</span>
              <TbArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PLANTS.map((plant) => (
              <div 
                key={plant.id} 
                className="rounded-2xl overflow-hidden bg-white/95 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${plant.badgeColor}`}>
                    {plant.badge}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider block mb-1">{plant.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{plant.name}</h3>
                  <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5"><TbSun className="text-amber-500 text-sm" /> {plant.light}</div>
                    <div className="flex items-center gap-1.5"><TbDroplet className="text-teal-500 text-sm" /> {plant.watering}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS - Subtle Tint Overlay */}
        <section className="py-20 bg-slate-900/5 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Loved by Plant Parents</h2>
              <p className="text-slate-600 text-sm font-medium">See how Greenzi helps thousands keep their houseplants healthy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white/95 p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0D9488] font-bold flex items-center justify-center text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 max-w-3xl mx-auto px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white/95 rounded-xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base"
                >
                  <span>{faq.q}</span>
                  <TbChevronDown className={`text-xl text-slate-400 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
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