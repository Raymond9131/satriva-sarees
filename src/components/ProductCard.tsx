"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { SareeProduct } from "@/types";
import { useCartWishlist } from "@/context/CartWishlistContext";
import QuickViewModal from "./QuickViewModal";

export default function ProductCard({ product }: { product: SareeProduct }) {
  const { toggleWishlist, isInWishlist, addToCart } = useCartWishlist();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.color);

  const isFavorited = isInWishlist(product.id);

  return (
    <>
      <div className="group relative bg-white rounded-xl overflow-hidden border border-[#EDE0D0] hover:border-[#C69A4B] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-3/4 w-full overflow-hidden bg-[#F8F1E8]">
          <Link href={`/product/${product.id}`} className="block w-full h-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-106"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.discountPercentage > 0 && (
              <span className="px-2 py-0.5 bg-[#741525] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-xs">
                {product.discountPercentage}% OFF
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-2 py-0.5 bg-[#C69A4B] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-xs">
                Best Seller
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product)}
            className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 z-10 shadow-sm ${
              isFavorited
                ? "bg-[#741525] text-white"
                : "bg-white/90 text-[#351D19] hover:bg-white hover:text-[#741525]"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`}
            />
          </button>

          {/* Quick View Hover Button */}
          <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="w-full py-2 bg-white/95 backdrop-blur-xs hover:bg-[#741525] hover:text-white text-[#351D19] text-xs font-semibold uppercase tracking-wider rounded-md border border-[#EDE0D0] shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Card Details */}
        <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between bg-white">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-[11px] text-[#C69A4B] font-medium mb-1">
              <span>{product.category}</span>
              <div className="flex items-center gap-1 text-[#351D19]/70">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Title */}
            <Link
              href={`/product/${product.id}`}
              className="block font-serif text-sm font-semibold text-[#351D19] hover:text-[#741525] transition-colors line-clamp-2 leading-snug mb-2"
            >
              {product.name}
            </Link>

            {/* Color Swatches */}
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="flex items-center gap-1.5 mb-2.5">
                {product.availableColors.map((c) => (
                  <button
                    key={c.name}
                    title={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all ${
                      selectedColor === c.name
                        ? "border-[#741525] scale-125 ring-1 ring-[#741525]"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
                <span className="text-[10px] text-gray-500 ml-1">
                  {product.availableColors.length} colors
                </span>
              </div>
            )}
          </div>

          <div>
            {/* Pricing */}
            <div className="flex items-baseline gap-2 pt-2 border-t border-[#F8F1E8]">
              <span className="font-serif text-base sm:text-lg font-bold text-[#741525]">
                ₹{product.discountedPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-[#351D19]/45 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={() => addToCart(product, 1, selectedColor)}
              className="mt-3 w-full py-2 bg-[#F8F1E8] hover:bg-[#741525] text-[#741525] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-[#EDE0D0] hover:border-[#741525] transition-all duration-300 flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <QuickViewModal
          product={product}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          onClose={() => setIsQuickViewOpen(false)}
        />
      )}
    </>
  );
}

