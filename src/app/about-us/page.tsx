import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, Heart, ShieldCheck } from "lucide-react";
import LotusIcon, { LotusDivider } from "@/components/LotusIcon";

export default function AboutUsPage() {
  const pillars = [
    {
      icon: Award,
      title: "Purity of Raw Silks",
      description:
        "Every thread is sourced from certified mulberry and wild tussar silk farms, tested rigorously for GSM density and natural tensile strength.",
    },
    {
      icon: Sparkles,
      title: "Authentic Gold & Silver Zari",
      description:
        "We preserve the centuries-old technique of electroplating pure silver wire onto silk cores, finished with micron-thin pure gold leafing.",
    },
    {
      icon: Heart,
      title: "Weaver Community Upliftment",
      description:
        "By bypassing commercial middlemen, we channel equitable fair-trade prosperity directly to our master artisan families in Varanasi and Tamil Nadu.",
    },
    {
      icon: ShieldCheck,
      title: "Bespoke Bridal Longevity",
      description:
        "Crafted to outlast fleeting fads, a Satriva saree is an heirloom crafted to be treasured by daughters, granddaughters, and generations unborn.",
    },
  ];

  const clusters = [
    {
      name: "Varanasi (Banaras)",
      state: "Uttar Pradesh",
      specialty: "Kadwa & Katan Gold Brocades",
      image: "/collections/traditional-model.jpg",
    },
    {
      name: "Kanchipuram",
      state: "Tamil Nadu",
      specialty: "Heavy Korvai Temple Silk Sarees",
      image: "/collections/silk-saree-model.jpg",
    },
    {
      name: "Chanderi & Maheshwar",
      state: "Madhya Pradesh",
      specialty: "Translucent Tissue & Cotton Silks",
      image: "/collections/daily-wear-model.jpg",
    },
    {
      name: "Murshidabad",
      state: "West Bengal",
      specialty: "Swarnachari & Baluchari Mythological Silks",
      image: "/collections/wedding-model.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#F8F1E8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#C69A4B]">
            <LotusIcon className="w-5 h-5 text-[#C69A4B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-serif font-bold text-[#741525]">
              OUR SOUL & HERITAGE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#351D19] leading-tight">
            Weaving Royal Tales, <br />
            <span className="font-serif italic text-[#741525]">
              One Drape at a Time.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#351D19]/80 font-sans leading-relaxed">
            Satriva Sarees was born from an ardent love for India&apos;s ancient handloom
            treasures. We unite timeless hand-weaving heritage with modern silhouettes
            to ensure that every woman feels like royalty.
          </p>
        </div>

        {/* Editorial Split Showcase 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EDE0D0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden shadow-xl border-2 border-[#C69A4B]/40">
            <Image
              src="/images/our-story-sarees.jpg"
              alt="Satriva Handcrafted Sarees"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#C69A4B] font-serif font-bold">
              THE PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#741525] font-semibold leading-snug">
              Grace in Every Drape
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#351D19]/85 font-sans leading-relaxed">
              <p>
                In an era dominated by synthetic fast fashion and mass-produced prints,
                Satriva stands firmly as an oasis of patient, soulful artisan craft.
                A single Banarasi or Kanjeevaram masterpiece can take up to four hundred
                hours of synchronized hand-manipulated pit loom weaving.
              </p>
              <p>
                When you unfold a Satriva saree, you are touching the legacy of weavers whose
                ancestors created garments for royal courts, temples, and celebratory
                auspicious occasions.
              </p>
            </div>
            <div className="pt-2">
              <span className="font-script text-3xl sm:text-4xl text-[#741525] block">
                Satriva Sarees
              </span>
              <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-[#C69A4B]">
                Curated by Passionate Connoisseurs
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div>
          <LotusDivider
            title="The Pillars of Satriva Craft"
            subtitle="The uncompromising standards that guide every saree we produce and curate."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EDE0D0] shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FFF8EF] border border-[#C69A4B] flex items-center justify-center mb-5 text-[#741525]">
                    <Icon className="w-6 h-6 text-[#741525]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#351D19] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#351D19]/75 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artisan Handloom Clusters */}
        <div className="bg-[#FFF8EF] rounded-3xl p-8 sm:p-12 border border-[#EDE0D0]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#C69A4B] font-serif font-bold">
              WEAVING GEOGRAPHIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#741525] mt-1 font-semibold">
              Our Revered Weaver Clusters
            </h2>
            <p className="text-xs sm:text-sm text-[#351D19]/75 mt-2">
              We partner directly with traditional weaver cooperatives across these legendary handloom epicenters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clusters.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-[#EDE0D0] shadow-xs group"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif font-bold text-sm text-[#741525]">{c.name}</h4>
                  <p className="text-[11px] text-[#C69A4B] font-medium">{c.state}</p>
                  <p className="text-xs text-[#351D19]/80 mt-1">{c.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-widest rounded-md shadow-md transition-colors"
            >
              <span>Explore Masterpiece Sarees</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

