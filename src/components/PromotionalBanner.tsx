"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Clock, Award } from "lucide-react";
import LotusIcon from "./LotusIcon";

export default function PromotionalBanner() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-20 bg-gradient-to-br from-[#3B0E16] via-[#4A1018] to-[#25080E] text-[#FFF8EF] overflow-hidden">
      {/* Subtle Ambient Radial Glow (Clean, No background images with text) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C69A4B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#741525]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C69A4B]/15 border border-[#C69A4B]/40 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DFC489]">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC489]" />
              <span>The Royal Bridal Trousseau 2026</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-[1.15]">
              Crafted in Pure Zari. <br />
              <span className="text-[#DFC489] font-normal italic">Woven for an Eternity.</span>
            </h2>

            {/* Narrative */}
            <p className="text-xs sm:text-sm text-stone-200/90 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Every heirloom saree in our bridal suite is meticulously handwoven on traditional pit looms in Varanasi and Kanchipuram. With over 180 hours of master artisan dedication, each drape embodies royal grace for life&apos;s most cherished celebrations.
            </p>

            {/* 3 Craft Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-[#DFC489] font-medium text-xs mb-1">
                  <Award className="w-4 h-4 text-[#C69A4B]" />
                  <span>Pure Mulberry Silk</span>
                </div>
                <p className="text-[11px] text-stone-300">
                  Certified pure silk threads hand-spun with real gold zari.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-[#DFC489] font-medium text-xs mb-1">
                  <Clock className="w-4 h-4 text-[#C69A4B]" />
                  <span>180+ Weaving Hours</span>
                </div>
                <p className="text-[11px] text-stone-300">
                  Handcrafted on wooden pit looms by 4th-generation weavers.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-[#DFC489] font-medium text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#C69A4B]" />
                  <span>Silk Mark Certified</span>
                </div>
                <p className="text-[11px] text-stone-300">
                  100% government authenticity seal guaranteed on every piece.
                </p>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop?category=Wedding%20Sarees"
                className="px-8 py-3.5 bg-[#C69A4B] hover:bg-[#A17830] text-[#351D19] font-bold text-xs uppercase tracking-widest rounded-md shadow-xl transition-all duration-300 hover:scale-102 flex items-center gap-2"
              >
                <span>Discover Bridal Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact-us"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider rounded-md border border-white/25 transition-colors"
              >
                Book Bridal Consultation
              </Link>
            </div>

            {/* Bottom Privileges Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-[11px] text-stone-300">
              <span className="flex items-center gap-1.5">
                <LotusIcon className="w-3.5 h-3.5 text-[#C69A4B]" /> Insured Global Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <LotusIcon className="w-3.5 h-3.5 text-[#C69A4B]" /> Complimentary Silk Preservation Box
              </span>
            </div>
          </div>

          {/* Right Visual Portrait Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl p-2.5 bg-gradient-to-b from-[#C69A4B]/40 via-white/10 to-[#C69A4B]/20 shadow-2xl">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#2D0F15]">
                <Image
                  src="/images/bridal-portrait-clean.jpg"
                  alt="Satriva Royal Bridal Saree Masterpiece"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top hover:scale-103 transition-transform duration-700"
                />

                {/* Floating Top Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-[#DFC489]">
                  ✨ Heritage Masterpiece
                </div>

                {/* Bottom Clean Glassmorphic Card */}
                <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-md rounded-xl p-3.5 border border-white/15 text-white">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white leading-tight">
                        Varanasi Imperial Maroon Zari Saree
                      </h4>
                      <p className="text-[11px] text-stone-300 mt-0.5">
                        Pure Katan Silk · Real Gold Zari Motifs
                      </p>
                    </div>
                    <span className="text-sm font-bold text-[#DFC489] shrink-0">
                      ₹18,999
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[10px] text-stone-400">
                      In Stock · Ready to Ship
                    </span>
                    <Link
                      href="/shop?category=Wedding%20Sarees"
                      className="text-[11px] font-semibold text-[#DFC489] hover:underline flex items-center gap-1"
                    >
                      <span>View Saree</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
