"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "/banners/satriva-official-banner-2k.jpg",
      alt: "Satriva Sarees - Elegance in Every Drape",
      link: "/shop",
    },
    {
      id: 2,
      image: "/banners/hero-palace-banner-2k.jpg",
      alt: "Satriva Sarees - Discover the Beauty of Indian Elegance",
      link: "/shop",
    },
    {
      id: 3,
      image: "/banners/satriva-official-banner-2k.jpg",
      alt: "Satriva Sarees - Handcrafted Heritage Sarees",
      link: "/shop?category=Silk%20Sarees",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPaused]);

  return (
    <section
      className="relative w-full bg-[#FAF5EE] overflow-hidden border-b border-[#EDE0D0] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Viewport matching exact 1024x384 (8:3 aspect ratio) */}
      <div className="relative w-full aspect-[16/6.8] sm:aspect-[16/6.2] md:aspect-[8/3] min-h-[220px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[460px]">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Link
                href={slide.link}
                className="block relative w-full h-full cursor-pointer"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  unoptimized={true}
                  className="object-cover object-center w-full h-full"
                />
              </Link>
            </div>
          );
        })}

        {/* Left Arrow Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Banner"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-white text-stone-700 shadow-md flex items-center justify-center transition-all hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Banner"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-white text-stone-700 shadow-md flex items-center justify-center transition-all hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Slide Indicators (Dots) */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-1.5 rounded-full">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide(idx);
              }}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                currentSlide === idx ? "w-6 bg-[#741525]" : "w-2 bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
