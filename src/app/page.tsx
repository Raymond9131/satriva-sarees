"use client";

import React from "react";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import CollectionSection from "@/components/CollectionSection";
import OurStorySection from "@/components/OurStorySection";

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAF6F0]">
      {/* 1. Hero Banner (Exact match to Reference Screenshot 1) */}
      <Hero />

      {/* 2. Benefits Bar (Exact 4 items from Reference Screenshot 1) */}
      <BenefitsSection />

      {/* 3. Saree Collection Section (Exact 6 cards from Reference Screenshot 1) */}
      <CollectionSection />

      {/* 4. Our Story Section (Exact split layout from Reference Screenshot 1) */}
      <OurStorySection />
    </div>
  );
}
