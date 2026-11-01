"use client";

import React from "react";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import CollectionSection from "@/components/CollectionSection";
import TrendingBestSellers from "@/components/TrendingBestSellers";
import PromotionalBanner from "@/components/PromotionalBanner";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import OurStorySection from "@/components/OurStorySection";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import InstagramFeed from "@/components/InstagramFeed";
import NewsletterSection from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAF6F0]">
      {/* 1. Hero Banner Slider */}
      <Hero />

      {/* 2. Benefits & Trust Bar */}
      <BenefitsSection />

      {/* 3. Saree Collection Section */}
      <CollectionSection />

      {/* 4. Trending & Best Sellers (Tabbed Showcase) */}
      <TrendingBestSellers />

      {/* 5. Editorial Promotional Banner */}
      <PromotionalBanner />

      {/* 6. New Arrivals (Fresh from the Looms) */}
      <NewArrivalsSection />

      {/* 7. Our Story & Heritage Section */}
      <OurStorySection />

      {/* 8. Customer Testimonials */}
      <CustomerTestimonials />

      {/* 9. Instagram / Social Media Gallery */}
      <InstagramFeed />

      {/* 10. Newsletter Subscription */}
      <NewsletterSection />
    </div>
  );
}
