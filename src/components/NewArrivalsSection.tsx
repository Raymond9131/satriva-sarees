"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";
import LotusIcon from "./LotusIcon";

export default function NewArrivalsSection() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew || p.rating >= 4.8).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#741525] mb-2">
              <LotusIcon className="w-4 h-4 text-[#C69A4B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C69A4B]">
                Fresh from the Looms
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#741525] tracking-tight">
              New Arrivals & Seasonal Edits
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#351D19]/75 max-w-xl">
              Recently off the wooden looms of Varanasi and Kanchipuram. Limited-edition handcrafted weaves for this festive season.
            </p>
          </div>

          <Link
            href="/shop?filter=new"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#741525] hover:text-[#4A1018] uppercase tracking-wider group shrink-0"
          >
            <span>View All New Arrivals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

