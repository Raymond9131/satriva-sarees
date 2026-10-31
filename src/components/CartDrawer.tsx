"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartWishlist } from "@/context/CartWishlistContext";

export default function CartDrawer() {
  const { cart, cartTotal, cartCount, updateQuantity, removeFromCart, isCartOpen, closeCart } =
    useCartWishlist();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const isFreeShipping = cartTotal >= freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF8EF] border-l border-[#EDE0D0] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#EDE0D0] flex items-center justify-between bg-[#F8F1E8]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#741525]" />
              <h2 className="text-lg font-serif font-semibold text-[#741525]">
                Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-[#351D19]/70 hover:text-[#741525] rounded-full hover:bg-[#EDE0D0]/50 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Bar */}
          <div className="bg-[#FFF4E0] border-b border-[#EAD5B5] px-5 py-3">
            <div className="text-xs font-medium text-[#741525]">
              {isFreeShipping ? (
                <span className="text-[#2E7D32] font-semibold flex items-center gap-1.5">
                  ✨ Congratulations! You unlocked FREE Express Shipping!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#741525]">₹{amountToFreeShipping.toLocaleString("en-IN")}</strong> more for <strong>FREE Shipping</strong>!
                </span>
              )}
            </div>
            <div className="w-full bg-[#EAD5B5] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#C69A4B] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#351D19]/70">
                <div className="w-16 h-16 rounded-full bg-[#EDE0D0] flex items-center justify-center mb-4 text-[#C69A4B]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-serif text-lg text-[#741525] font-medium">Your Bag is Empty</p>
                <p className="text-sm mt-1 max-w-xs text-[#351D19]/70">
                  Explore our luxury handloom collection and wrap yourself in timeless Indian elegance.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-6 py-2.5 bg-[#741525] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#4A1018] transition-colors"
                >
                  Explore Sarees
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-white rounded-lg border border-[#EDE0D0] shadow-xs"
                >
                  <div className="relative w-20 h-24 rounded-md overflow-hidden bg-[#F8F1E8] shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <Link
                          href={`/product/${item.product.id}`}
                          onClick={closeCart}
                          className="text-xs font-serif font-semibold text-[#351D19] hover:text-[#741525] line-clamp-2 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#C69A4B] font-medium mt-0.5">
                        Color: {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F8F1E8]">
                      <div className="flex items-center border border-[#EDE0D0] rounded-md bg-[#FFF8EF]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-xs text-[#351D19] hover:bg-[#EDE0D0] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-medium text-[#351D19]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-xs text-[#351D19] hover:bg-[#EDE0D0] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-semibold text-[#741525]">
                          ₹{(item.product.discountedPrice * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#EDE0D0] bg-[#F8F1E8] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#351D19]/80">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#351D19]">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-[#351D19]/80">
                  <span>Shipping</span>
                  <span className="font-medium text-[#2E7D32]">
                    {isFreeShipping ? "FREE" : "₹150"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#741525] pt-2 border-t border-[#EDE0D0]">
                  <span>Estimated Total</span>
                  <span>
                    ₹{(cartTotal + (isFreeShipping ? 0 : 150)).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#741525] text-white text-xs font-semibold uppercase tracking-widest rounded-md hover:bg-[#4A1018] transition-colors shadow-sm"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full py-2.5 bg-transparent border border-[#EDE0D0] text-[#351D19] text-xs font-medium uppercase tracking-wider rounded-md hover:bg-[#EDE0D0]/50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              <p className="text-[10px] text-center text-[#351D19]/60">
                🔒 Guaranteed Safe & Secure Indian Ethnic Checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

