import React from "react";
import { Award, Truck, Heart, Headphones } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the best for you",
    },
    {
      icon: Truck,
      title: "Fast & Safe Shipping",
      description: "On all orders",
    },
    {
      icon: Heart,
      title: "Easy Returns",
      description: "Hassle-free shopping",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "We're here to help",
    },
  ];

  return (
    <section className="w-full bg-[#F8F2EA] border-b border-[#E6DACB] py-7 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-[#DFD0BE]">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 px-2 sm:px-4 text-left"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#351D19] stroke-[1.25] shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-sans font-bold text-[#351D19] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#351D19]/75 font-sans mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
