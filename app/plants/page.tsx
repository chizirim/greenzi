// app/plants/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  TbSearch, 
  TbSun, 
  TbDroplet, 
  TbFilter, 
  TbSparkles, 
  TbArrowRight,
  TbShieldCheck,
  TbAlertTriangle
} from "react-icons/tb";

const PLANTS_DATA = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    botanicalName: "Monstera deliciosa",
    category: "Tropical",
    careLevel: "Easy",
    light: "Bright Indirect",
    watering: "Every 1–2 Weeks",
    petSafe: false,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
    description: "Iconic split leaves that add an instant jungle vibe to any well-lit room.",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    botanicalName: "Sansevieria trifasciata",
    category: "Succulent",
    careLevel: "Beginner",
    light: "Low to Bright",
    watering: "Every 2–3 Weeks",
    petSafe: false,
    image: "https://images.unsplash.com/photo-1599598425947-020645557002?q=80&w=800&auto=format&fit=crop",
    description: "Nearly indestructible indoor plant that purifies air and thrives on neglect.",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    botanicalName: "Spathiphyllum",
    category: "Flowering",
    careLevel: "Moderate",
    light: "Medium Indirect",
    watering: "Weekly",
    petSafe: false,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=800&auto=format&fit=crop",
    description: "Elegant dark green leaves with white blooms. Communicates when thirsty by drooping.",
  },
  {
    id: "golden-pothos",
    name: "Golden Pothos",
    botanicalName: "Epipremnum aureum",
    category: "Vining",
    careLevel: "Beginner",
    light: "Low to Bright",
    watering: "Every 1–2 Weeks",
    petSafe: false,
    image: "https://images.unsplash.com/photo-1596724803565-38827732a39a?q=80&w=800&auto=format&fit=crop",
    description: "Fast-growing vine featuring variegated golden leaves. Great for hanging planters.",
  },
  {
    id: "calathea-rattlesnake",
    name: "Rattlesnake Plant",
    botanicalName: "Goeppertia insignis",
    category: "Tropical",
    careLevel: "Moderate",
    light: "Medium Indirect",
    watering: "Weekly",
    petSafe: true,
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop",
    description: "Patterned foliage with rich purple undersides. Completely pet-friendly!",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    botanicalName: "Ficus lyrata",
    category: "Tree",
    careLevel: "Advanced",
    light: "Bright Indirect",
    watering: "Every 1–2 Weeks",
    petSafe: false,
    image: "https://images.unsplash.com/photo-1545241047-1b3a3684587a?q=80&w=800&auto=format&fit=crop",
    description: "Stunning large violin-shaped leaves. A staple statement tree for bright spaces.",
  },
  {
    id: "boston-fern",
    name: "Boston Fern",
    botanicalName: "Nephrolepis exaltata",
    category: "Fern",
    careLevel: "Moderate",
    light: "Medium Indirect",
    watering: "Twice a Week",
    petSafe: true,
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800&auto=format&fit=crop",
    description: "Lush, feathery fronds that love high humidity areas like bathrooms.",
  },
  {
    id: "peperomia-obtusifolia",
    name: "Baby Rubber Plant",
    botanicalName: "Peperomia obtusifolia",
    category: "Succulent",
    careLevel: "Beginner",
    light: "Medium to Bright",
    watering: "Every 1–2 Weeks",
    petSafe: true,
    image: "https://images.unsplash.com/photo-1620127807580-99071b782f91?q=80&w=800&auto=format&fit=crop",
    description: "Compact succulent-like plant with glossy round leaves. Safe for cats and dogs.",
  },
];

const CATEGORIES = ["All", "Tropical", "Succulent", "Vining", "Flowering", "Fern", "Tree"];

export default function ExplorePlantsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [petSafeOnly, setPetSafeOnly] = useState(false);

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || plant.category === selectedCategory;

    const matchesPetFilter = !petSafeOnly || plant.petSafe;

    return matchesSearch && matchesCategory && matchesPetFilter;
  });

  return (
    <div className="relative min-h-screen text-slate-800">
      {/* FIXED BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/background.png')` }}
      />

      <main className="relative z-10 py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        {/* HEADER SECTION */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50/90 text-[#0D9488] border border-emerald-100 shadow-sm">
            <TbSparkles className="text-[#0D9488] text-base" />
            <span>Botanical Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#034B8E] tracking-tight">
            Explore Indoor Plants
          </h1>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Find the perfect green companion for your light conditions, schedule, and home setup.
          </p>

          {/* SEARCH BAR */}
          <div className="relative max-w-xl mx-auto pt-2">
            <TbSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input
              type="text"
              placeholder="Search by name, botanical species, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/95 border border-slate-200/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-sm text-slate-800 placeholder-slate-400"
            />
          </div>
        </section>

        {/* FILTERS & CATEGORIES */}
        <section className="bg-white/90 p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <TbFilter className="text-slate-400 text-lg shrink-0 mr-1" />
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                    selectedCategory === category
                      ? "bg-[#0D9488] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Pet Safe Toggle Filter */}
            <label className="inline-flex items-center gap-2 cursor-pointer self-end md:self-auto shrink-0 bg-white px-3 py-2 rounded-full border border-slate-200/80 shadow-sm">
              <input
                type="checkbox"
                checked={petSafeOnly}
                onChange={(e) => setPetSafeOnly(e.target.checked)}
                className="rounded text-[#0D9488] focus:ring-[#0D9488] w-4 h-4 cursor-pointer"
              />
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <TbShieldCheck className="text-emerald-600 text-base" /> Pet-Friendly Only
              </span>
            </label>

          </div>
        </section>

        {/* PLANT GRID */}
        {filteredPlants.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <div
                key={plant.id}
                className="rounded-2xl overflow-hidden bg-white/95 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Plant Image */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <Image
                      src={plant.image}
                      alt={plant.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Care Level Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-white/90 text-slate-800 border border-slate-200/60">
                      {plant.careLevel}
                    </span>

                    {/* Pet Safety Badge */}
                    <span
                      className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 ${
                        plant.petSafe
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-slate-900/80 text-white backdrop-blur-sm"
                      }`}
                    >
                      {plant.petSafe ? (
                        <>
                          <TbShieldCheck className="text-sm" /> Pet Safe
                        </>
                      ) : (
                        <>
                          <TbAlertTriangle className="text-sm text-amber-400" /> Toxic
                        </>
                      )}
                    </span>
                  </div>

                  {/* Plant Details */}
                  <div className="p-5 space-y-2">
                    <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider block">
                      {plant.category}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {plant.name}
                      </h3>
                      <p className="text-xs italic text-slate-500">
                        {plant.botanicalName}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 pt-1">
                      {plant.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-1.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <TbSun className="text-amber-500 text-sm shrink-0" />
                        <span>{plant.light}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TbDroplet className="text-teal-500 text-sm shrink-0" />
                        <span>{plant.watering}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-2">
                  <button className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-[#0D9488] text-[#0D9488] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-emerald-100">
                    <span>View Care Details</span>
                    <TbArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="text-center py-16 bg-white/90 rounded-3xl border border-slate-200/80 shadow-sm max-w-lg mx-auto space-y-3">
            <p className="text-lg font-bold text-slate-800">No matching plants found</p>
            <p className="text-xs text-slate-500">
              Try adjusting your search criteria or turning off the pet-friendly filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setPetSafeOnly(false);
              }}
              className="px-4 py-2 bg-[#0D9488] text-white rounded-full text-xs font-semibold shadow-sm hover:bg-[#0f766e] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}