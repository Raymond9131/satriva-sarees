"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "./SocialIcons";
import LotusIcon from "./LotusIcon";

export default function InstagramFeed() {
  const posts = [
    {
      id: 1,
      image: "/collections/silk-sarees-hires-standard.jpg",
      handle: "@satrivasarees",
      caption: "Imperial Maroon Kanjivaram at the royal palace courtyards.",
    },
    {
      id: 2,
      image: "/collections/party-wear-hires-standard.jpg",
      handle: "@satrivasarees",
      caption: "Midnight shimmer with hand-placed micro-sequin artistry.",
    },
    {
      id: 3,
      image: "/collections/traditional-sarees-hires-standard.jpg",
      handle: "@satrivasarees",
      caption: "Sacred crimson tones woven with authentic gold temple borders.",
    },
    {
      id: 4,
      image: "/collections/designer-card-hires-standard.jpg",
      handle: "@satrivasarees",
      caption: "Royal violet opulence for unforgettable reception galas.",
    },
    {
      id: 5,
      image: "/collections/daily-wear-card-hires-standard.jpg",
      handle: "@satrivasarees",
      caption: "Breathable morning handloom elegance for intimate gatherings.",
    },
    {
      id: 6,
      image: "/collections/wedding-sarees-hires-standard.jpg",
      handle: "@satrivasarees",
      caption: "The heirloom bridal trousseau drape that captures every heart.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 text-[#B08D57] mb-2">
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
            <LotusIcon className="w-5 h-5 text-[#741525]" />
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
          </div>

          <span className="text-xs font-semibold tracking-[0.25em] text-[#C69A4B] uppercase block mb-1">
            #SatrivaRoyals on Instagram
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#741525] tracking-tight">
            Curated Drapes in the Spotlight
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#351D19]/75">
            Tag @satrivasarees or use #SatrivaRoyals on Instagram to be featured in our royal gallery.
          </p>
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[3/4] rounded-lg overflow-hidden border border-[#EDE0D0] shadow-xs"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-108"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#741525]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                <InstagramIcon className="w-6 h-6 mb-2 text-[#DFC489]" />
                <p className="text-[10px] line-clamp-3 leading-snug font-serif">
                  {post.caption}
                </p>
                <span className="mt-2 text-[9px] uppercase tracking-wider text-[#DFC489] font-semibold underline underline-offset-2">
                  View Post →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#741525] text-[#741525] hover:bg-[#741525] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @satrivasarees</span>
          </a>
        </div>
      </div>
    </section>
  );
}

