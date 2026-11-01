"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";
import LotusIcon from "./LotusIcon";

export default function TrendingBestSellers() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Bestsellers" },
    { id: "Silk Sarees", label: "Pure Silk" },
    { id: "Party Wear Sarees", label: "Party Wear" },
    { id: "Wedding Sarees", label: "Wedding Heritage" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4)
      : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 text-[#B08D57] mb-2">
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
            <LotusIcon className="w-5 h-5 text-[#741525]" />
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
          </div>

          <span className="text-xs font-semibold tracking-[0.25em] text-[#C69A4B] uppercase block mb-1">
            Handcrafted Masterpieces
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#741525] tracking-tight font-serif">
            Trending & Bestselling Sarees
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#351D19]/75">
            Admired by modern royalty. Each weave tells a timeless story of Indian elegance.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#741525] text-white shadow-sm"
                    : "bg-[#F8F1E8] text-[#351D19]/80 hover:bg-[#EDE0D0] hover:text-[#741525]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-widest rounded-md shadow-md transition-all duration-300 hover:scale-102"
          >
            <span>Explore All Sarees</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

