import React from "react";
import CollectionCard from "./CollectionCard";
import LotusIcon from "./LotusIcon";

export default function CollectionSection() {
  const collections = [
    {
      id: "silk",
      name: "Silk Sarees",
      image: "/collections/silk-sarees-hires-standard.jpg",
      slug: "silk-sarees",
    },
    {
      id: "party",
      name: "Party Wear Sarees",
      image: "/collections/party-wear-hires-standard.jpg",
      slug: "party-wear-sarees",
    },
    {
      id: "trad",
      name: "Traditional Sarees",
      image: "/collections/traditional-sarees-hires-standard.jpg",
      slug: "traditional-sarees",
    },
    {
      id: "des",
      name: "Designer Sarees",
      image: "/collections/designer-card-hires-standard.jpg",
      slug: "designer-sarees",
    },
    {
      id: "daily",
      name: "Daily Wear Sarees",
      image: "/collections/daily-wear-card-hires-standard.jpg",
      slug: "daily-wear-sarees",
    },
    {
      id: "wed",
      name: "Wedding Sarees",
      image: "/collections/wedding-sarees-hires-standard.jpg",
      slug: "wedding-sarees",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lotus Divider & Headings */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 text-[#B08D57] mb-2">
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
            <LotusIcon className="w-5 h-5 text-[#741525]" />
            <span className="h-[1px] w-12 sm:w-16 bg-[#B08D57]/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#741525] tracking-tight">
            Explore Our Saree Collection
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#351D19]/80 font-normal">
            Find the perfect saree for every occasion
          </p>
        </div>

        {/* 6 High-Definition Collection Cards in 1 Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {collections.map((col) => (
            <CollectionCard
              key={col.id}
              id={col.id}
              name={col.name}
              image={col.image}
              slug={col.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
