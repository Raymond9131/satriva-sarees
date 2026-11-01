"use client";

import React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";
import LotusIcon from "./LotusIcon";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Ananya Sengupta",
      location: "Kolkata, West Bengal",
      occasion: "Bridal Reception",
      quote:
        "The Kanjivaram silk saree I wore for my reception felt like pure royalty. The zari luster is understated and opulent, and the drape stayed crisp and comfortable through 6 hours of ceremonies. Absolutely unmatched craftsmanship!",
      rating: 5,
      product: "Royal Maroon Kanjivaram Pure Silk",
    },
    {
      id: 2,
      name: "Radhika Mehra",
      location: "New Delhi",
      occasion: "Cocktail Evening",
      quote:
        "I was hesitant about ordering luxury ethnic wear online, but the Midnight Plum Sequin saree exceeded all expectations! The sequins are sewn with remarkable precision without a single scratch. Received endless compliments!",
      rating: 5,
      product: "Aurora Midnight Plum Sequin Saree",
    },
    {
      id: 3,
      name: "Meenakshi Sundaram",
      location: "Chennai, Tamil Nadu",
      occasion: "Family Temple Festival",
      quote:
        "Satriva Sarees honors the purest traditions of South Indian handloom. The pure mulberry silk feel is divine and the pallu motifs are authentic temple art. The complimentary silk storage pouch is a wonderful touch.",
      rating: 5,
      product: "Traditional Crimson Temple Zari Silk",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 text-[#B08D57] mb-2">
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
            <LotusIcon className="w-5 h-5 text-[#741525]" />
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
          </div>

          <span className="text-xs font-semibold tracking-[0.25em] text-[#C69A4B] uppercase block mb-1">
            Voices of Royalty
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#741525] tracking-tight">
            Loved by Connoisseurs Across India
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#351D19]/75">
            Read authentic reviews from patrons, brides, and collectors who chose Satriva for life&apos;s most cherished celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF6F0] rounded-xl p-6 sm:p-7 border border-[#EDE0D0] shadow-xs flex flex-col justify-between hover:border-[#C69A4B] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C69A4B]/40" />
                </div>

                <p className="text-xs sm:text-sm text-[#351D19]/85 leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE0D0]/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#741525]">{t.name}</h4>
                    <p className="text-[11px] text-[#351D19]/60">{t.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#2E7D32] font-semibold bg-[#2E7D32]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" /> Verified Patron
                  </span>
                </div>
                <p className="text-[11px] text-[#C69A4B] font-medium mt-1">
                  Wore for: {t.occasion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

