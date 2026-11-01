"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Star, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import { SareeProduct } from "@/types";
import { useCartWishlist } from "@/context/CartWishlistContext";

interface QuickViewModalProps {
  product: SareeProduct;
  selectedColor: string;
  onSelectColor: (color: string) => void;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  selectedColor,
  onSelectColor,
  onClose,
}: QuickViewModalProps) {
  const { addToCart } = useCartWishlist();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-[#FFF8EF] border border-[#C69A4B] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#351D19]/60 hover:text-[#741525] rounded-full hover:bg-[#EDE0D0]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Images */}
            <div className="p-6 bg-[#F8F1E8] flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#EDE0D0]">
              <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2.5 mt-4">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-[#741525] ring-2 ring-[#741525]/30 scale-105"
                          : "border-gray-300 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C69A4B] font-serif font-semibold">
                  {product.category}
                </span>

                <h3 className="font-serif text-lg md:text-xl font-bold text-[#351D19] mt-1 leading-snug">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-1.5 text-xs text-[#351D19]/80">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span>·</span>
                  <span className="text-stone-500">({product.reviewsCount} verified reviews)</span>
                  <span>·</span>
                  <span className="text-stone-400">SKU: {product.sku}</span>
                </div>

                {/* Fixed Pricing */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-serif text-2xl font-bold text-[#741525]">
                    ₹{product.discountedPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    (Fixed Price)
                  </span>
                </div>

                {/* Color Selector */}
                {product.availableColors && product.availableColors.length > 0 && (
                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-[#351D19] mb-1.5">
                      Selected Shade: <strong className="text-[#741525]">{selectedColor}</strong>
                    </label>
                    <div className="flex items-center gap-2">
                      {product.availableColors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => onSelectColor(c.name)}
                          className={`w-6 h-6 rounded-full border-2 transition-transform ${
                            selectedColor === c.name
                              ? "border-[#741525] scale-110 shadow-sm"
                              : "border-gray-300 hover:scale-105"
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Description Snippet */}
                <p className="text-xs text-[#351D19]/80 font-sans mt-3 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Fabric highlight */}
                <div className="mt-3 p-2.5 bg-white rounded-md border border-[#EDE0D0] text-[11px] text-[#351D19]/80 space-y-1">
                  <p>
                    <strong className="text-[#351D19]">Fabric:</strong> {product.fabric}
                  </p>
                  <p>
                    <strong className="text-[#351D19]">Blouse:</strong> {product.blousePiece}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#EDE0D0] rounded-md bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-xs text-[#351D19] hover:bg-[#EDE0D0]"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-medium text-[#351D19]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-xs text-[#351D19] hover:bg-[#EDE0D0]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-2.5 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="text-[#741525] font-semibold hover:underline flex items-center gap-1"
                  >
                    View Full Product Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-emerald-700 font-medium flex items-center gap-1 text-[11px]">
                    <Truck className="w-3.5 h-3.5" /> Free Express Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

