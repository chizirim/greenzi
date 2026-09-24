// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TbPlant } from "react-icons/tb";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { Theme } from "./theme";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Care Tips", url: "/care-tips" },
    { label: "About", url: "/about" },
    { label: "Contact Us", url: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between lg:px-12 px-5 py-2.5 shadow-sm relative bg-white z-50 border-b border-slate-100">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2.5 z-50 group">
        <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/logo.png"
            alt="Greenzi Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </div>
        <span 
          className="text-xl font-bold tracking-tight"
          style={{ color: Theme.navy }}
        >
          Greenzi
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="ml-auto flex items-center gap-6 max-lg:hidden">
        {navLinks.map((item, i) => (
          <article key={i} className="group relative py-0.5">
            <Link 
              href={item.url} 
              className="text-sm font-medium transition-colors duration-200 hover:text-slate-900"
              style={{ color: Theme.navy }}
            >
              {item.label}
            </Link>
            <div 
              className="h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out absolute bottom-0 left-0"
              style={{ backgroundColor: Theme.secondarygreen }}
            />
          </article>
        ))}
      </nav>

      {/* Desktop Action Buttons */}
      <div className="flex items-center gap-3 ml-6 max-lg:hidden">
        {/* Main Feature Button: Explore Plants */}
        <Link 
          href="/plants" 
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          style={{ backgroundColor: Theme.secondarygreen }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = Theme.teal;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = Theme.secondarygreen;
          }}
        >
          <TbPlant className="text-base" />
          <span>Explore Plants</span>
        </Link>

        {/* Account Button */}
        <Link 
          href="/auth" 
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          style={{ backgroundColor: Theme.primaryblue }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = Theme.navy;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = Theme.primaryblue;
          }}
        >
          <span>Account</span>
          <FaRegCircleUser className="text-base" />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setNavOpen(!navOpen)} 
        className="lg:hidden z-50 text-2xl focus:outline-none transition-colors"
        style={{ color: Theme.navy }}
        aria-label="Toggle Navigation"
      >
        {navOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 w-full h-dvh bg-white flex flex-col justify-between pt-20 pb-10 px-6 transition-all duration-300 z-40 ${
          navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 items-center text-center">
          {navLinks.map((item, i) => (
            <Link 
              key={i} 
              href={item.url} 
              onClick={() => setNavOpen(false)} 
              className="text-lg font-semibold transition-colors"
              style={{ color: Theme.navy }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3 w-full">
          <Link 
            href="/plants" 
            onClick={() => setNavOpen(false)} 
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-base font-semibold shadow-sm"
            style={{ backgroundColor: Theme.secondarygreen }}
          >
            <TbPlant className="text-lg" /> Explore Plants
          </Link>
          <Link 
            href="/auth" 
            onClick={() => setNavOpen(false)} 
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-base font-semibold shadow-sm"
            style={{ backgroundColor: Theme.textMuted }}
          >
            Account <FaRegCircleUser />
          </Link>
        </div>
      </div>
    </header>
  );
}