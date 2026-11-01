"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#351D19] text-[#FFF8EF] border-t-2 border-[#C69A4B] relative overflow-hidden">
      {/* Subtle Top Gold Border Ornament */}
      <div className="h-1 bg-gradient-to-r from-[#4A1018] via-[#C69A4B] to-[#741525]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#C69A4B] via-[#E5C378] to-[#9E1C2A] shadow-md">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/logo/satriva-logo.jpg"
                    alt="Satriva Sarees Official Logo"
                    fill
                    sizes="56px"
                    className="object-cover scale-[1.1]"
                  />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white block">
                  SATRIVA
                </span>
                <span className="text-xs tracking-[0.35em] text-[#C69A4B] font-serif block -mt-1">
                  SAREES
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Dedicated to the royal craft of Indian handloom weaving. From the heritage ghats of Varanasi to the temple looms of Kanchipuram, Satriva Sarees brings unmatched grace to every drape.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C69A4B] text-white hover:text-[#351D19] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C69A4B] text-white hover:text-[#351D19] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C69A4B] text-white hover:text-[#351D19] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Saree Collections */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C69A4B] uppercase mb-4">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link href="/shop?category=Silk Sarees" className="hover:text-[#C69A4B] transition-colors">
                  Silk Sarees
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Party Wear Sarees" className="hover:text-[#C69A4B] transition-colors">
                  Party Wear Sarees
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Traditional Sarees" className="hover:text-[#C69A4B] transition-colors">
                  Traditional Sarees
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Designer Sarees" className="hover:text-[#C69A4B] transition-colors">
                  Designer Sarees
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Daily Wear Sarees" className="hover:text-[#C69A4B] transition-colors">
                  Daily Wear Sarees
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Wedding Sarees" className="hover:text-[#C69A4B] transition-colors">
                  Wedding Sarees
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C69A4B] uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link href="/" className="hover:text-[#C69A4B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#C69A4B] transition-colors">
                  Shop All Sarees
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=new" className="hover:text-[#C69A4B] transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=bestseller" className="hover:text-[#C69A4B] transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#C69A4B] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#C69A4B] transition-colors">
                  Contact & Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Concierge */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#C69A4B] uppercase mb-4">
              Concierge
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C69A4B] shrink-0 mt-0.5" />
                <span>Flagship Lounge, Indiranagar, Bangalore - 560038</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C69A4B] shrink-0" />
                <a href="tel:+919131889706" className="hover:text-[#C69A4B] transition-colors">
                  +91 91318 89706
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C69A4B] shrink-0" />
                <span>concierge@satrivasarees.com</span>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-stone-400 block">Mon - Sat: 10:00 AM – 8:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Satriva Sarees. All Rights Reserved. Crafted with pride for Indian Heritage.</p>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#C69A4B]" /> 100% Genuine Handlooms
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-4 h-4 text-[#C69A4B]" /> 256-bit Encrypted Checkout
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
