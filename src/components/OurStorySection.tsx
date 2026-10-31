import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="w-full bg-[#FAF4EC] border-t border-b border-[#E8DEC\-D] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[300px] sm:min-h-[340px]">
          {/* Left: Stacked Folded Sarees Photography (Exact match to Reference Screenshot 1) */}
          <div className="lg:col-span-5 relative w-full min-h-[240px] sm:min-h-[300px] lg:min-h-full">
            <Image
              src="/images/our-story-sarees.jpg"
              alt="Our Story - Satriva Sarees"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: Narrative Story Content */}
          <div className="lg:col-span-7 relative p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4">
            {/* Top Right Background Sketch Floral Art */}
            <div className="absolute top-2 right-4 w-32 h-32 opacity-25 pointer-events-none hidden sm:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="#C69A4B" strokeWidth="1">
                <path d="M50 10 C45 25 35 40 50 60 C65 40 55 25 50 10 Z" />
                <path d="M45 20 C30 30 20 45 35 60 C45 45 40 30 45 20 Z" />
                <path d="M55 20 C70 30 80 45 65 60 C55 45 60 30 55 20 Z" />
                <path d="M35 35 C15 45 10 60 25 70 C35 60 30 45 35 35 Z" />
                <path d="M65 35 C85 45 90 60 75 70 C65 60 70 45 65 35 Z" />
              </svg>
            </div>

            {/* Heading: Our Story – Satriva Sarees */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-bold text-[#741525] leading-tight">
              Our Story – Satriva Sarees
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 text-xs sm:text-[13px] md:text-sm text-[#351D19]/85 font-sans leading-relaxed max-w-xl">
              <p>
                At Satriva Sarees, we celebrate the timeless beauty of Indian ethnic fashion.
                Our vision is to bring the charm of traditional sarees to modern women
                through beautiful designs, elegant styles and a delightful shopping experience.
              </p>
              <p>
                A saree is more than just an outfit. It is a symbol of tradition, culture and elegance.
              </p>
            </div>

            {/* Action Button & Signature */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#741525] hover:bg-[#520e1a] text-white text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs transition-colors w-fit"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Hand-lettered signature script on bottom right */}
              <div className="text-right sm:pr-4">
                <span className="font-script text-3xl sm:text-4xl text-[#351D19] block tracking-wide">
                  Satriva Sarees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
