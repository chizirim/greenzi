// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import { Theme } from "./theme";

export default function Footer() {
  return (
    <footer 
      className="pt-16 pb-8 border-t relative overflow-hidden backdrop-blur-xs"
      style={{ 
        backgroundColor: Theme.bgCard, 
        borderColor: Theme.border 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Newsletter Banner */}
        <div 
          className="rounded-3xl p-8 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs border relative overflow-hidden"
          style={{ 
            backgroundColor: Theme.bgBanner, 
            borderColor: Theme.borderFocus 
          }}
        >
          <div className="max-w-xl space-y-2 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight" style={{ color: Theme.textHeading }}>
              Grow with Greenzi Updates!
            </h3>
            <p className="text-sm lg:text-base font-medium" style={{ color: Theme.text }}>
              Subscribe to our weekly plant-care guide to get seasonal maintenance tips and new species spotlights straight to your inbox.
            </p>
          </div>

          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto"
          >
            <div className="relative w-full sm:w-80">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-3 rounded-full text-sm font-medium focus:outline-none border shadow-xs"
                style={{ 
                  backgroundColor: Theme.bgCard, 
                  color: Theme.text, 
                  borderColor: Theme.border 
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs shrink-0"
              style={{ backgroundColor: Theme.secondarygreen }}
            >
              <span>Subscribe</span>
              <FiArrowRight />
            </button>
          </form>
        </div>

        {/* Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: Theme.border }}>
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Greenzi Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-2xl font-bold tracking-tight" style={{ color: Theme.textHeading }}>
                Greenzi.
              </span>
            </Link>
            <p className="text-xs leading-relaxed font-medium" style={{ color: Theme.text }}>
              Connecting a global community of plant lovers through comprehensive indoor plant guides, care routines, and diagnostic troubleshooting.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all shadow-xs hover:scale-105"
                  style={{ backgroundColor: Theme.bgCard, borderColor: Theme.border, color: Theme.text }}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wide uppercase" style={{ color: Theme.textHeading }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold" style={{ color: Theme.text }}>
              <li><Link href="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-80 transition-opacity">About Us</Link></li>
              <li><Link href="/plants" className="hover:opacity-80 transition-opacity">Explore Collection</Link></li>
              <li><Link href="/care-tips" className="hover:opacity-80 transition-opacity">Care Guides</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* Plant Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wide uppercase" style={{ color: Theme.textHeading }}>
              Explore Needs
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold" style={{ color: Theme.text }}>
              <li><Link href="/plants?sunlight=Low+Light" className="hover:opacity-80 transition-opacity">Low Light Plants</Link></li>
              <li><Link href="/plants?petSafe=true" className="hover:opacity-80 transition-opacity">Pet-Friendly Botanicals</Link></li>
              <li><Link href="/plants?difficulty=Beginner" className="hover:opacity-80 transition-opacity">Beginner Friendly</Link></li>
              <li><Link href="/plants?watering=Low" className="hover:opacity-80 transition-opacity">Drought Resistant</Link></li>
              <li><Link href="/care-tips" className="hover:opacity-80 transition-opacity">Soil & Repotting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wide uppercase" style={{ color: Theme.textHeading }}>
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs font-semibold" style={{ color: Theme.text }}>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-base shrink-0 mt-0.5" style={{ color: Theme.secondarygreen }} />
                <span>Lagos, Nigeria & Worldwide Botanical Index</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-base shrink-0" style={{ color: Theme.secondarygreen }} />
                <span>+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-base shrink-0" style={{ color: Theme.secondarygreen }} />
                <span>support@greenzi.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium gap-4" style={{ color: Theme.textMuted }}>
          <p>© {new Date().getFullYear()} Greenzi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}