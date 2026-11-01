"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="w-full bg-[#FAF4EC] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[300px] sm:min-h-[340px] lg:min-h-[370px]">
        {/* Left: Stacked Folded Sarees Photography - Full Bleed */}
        <div className="lg:col-span-5 relative w-full h-[260px] sm:h-[320px] lg:h-full min-h-[260px]">
          <Image
            src="/images/our-story-fullwidth-sarees.jpg"
            alt="Our Story - Satriva Sarees"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right: Narrative Story Content */}
        <div className="lg:col-span-7 relative p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-4">
          {/* Top Right Botanical Lotus Sketch Ornament */}
          <div className="absolute top-0 right-0 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none mix-blend-multiply opacity-75">
            <Image
              src="/images/our-story-lotus-sketch.png"
              alt="Satriva Lotus Sketch"
              fill
              className="object-contain object-top-right"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-[#741525] leading-tight tracking-tight">
            Our Story – Satriva Sarees
          </h2>

          {/* Narrative Paragraphs */}
          <div className="space-y-3 text-xs sm:text-[13px] md:text-sm text-[#351D19]/85 font-sans leading-relaxed max-w-2xl">
            <p>
              At Satriva Sarees, we celebrate the timeless beauty of Indian ethnic fashion.
              Our vision is to bring the charm of traditional sarees to modern women
              through beautiful designs, elegant styles and a delightful shopping experience.
            </p>
            <p>
              A saree is more than just an outfit. It is a symbol of tradition, culture and elegance.
            </p>
          </div>

          {/* Action Button & Authentic Script Signature */}
          <div className="pt-2 sm:pt-4 flex items-center justify-between gap-4 flex-wrap">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs transition-colors"
            >
              <span>LEARN MORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Exact Script Signature from Reference Screenshot */}
            <div className="relative w-36 sm:w-44 h-12 sm:h-16 mix-blend-multiply opacity-90 shrink-0">
              <Image
                src="/images/our-story-signature.png"
                alt="Satriva Sarees Hand-lettered Signature"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
