"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  ChevronRight,
  ShoppingBag,
  Download,
} from "lucide-react";
import { useCartWishlist } from "@/context/CartWishlistContext";
import LotusIcon from "@/components/LotusIcon";

export default function CheckoutPage() {
  const { isMounted, cart, cartTotal, clearCart } = useCartWishlist();

  // Form State
  const [formData, setFormData] = useState({
    name: "Pooja Varma",
    email: "pooja.varma@example.com",
    phone: "9131889706",
    address: "Flat 402, Royal Palms Residency, 12th Main Road",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560038",
  });

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState("");

  const shippingCost = cartTotal >= 999 || cartTotal === 0 ? 0 : 150;
  const grandTotal = cartTotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill in all mandatory shipping and contact details.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `SAT-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedOrderId(orderId);
      setIsSubmitting(false);
      setOrderConfirmed(true);
      clearCart();
    }, 1200);
  };

  if (!isMounted) {
    return (
      <div className="w-full bg-[#F8F1E8] min-h-screen py-24 flex flex-col items-center justify-center">
        <LotusIcon className="w-12 h-12 text-[#C69A4B] animate-pulse mb-3" />
        <p className="font-serif text-sm font-semibold text-[#741525]">Loading Your Royal Bag...</p>
      </div>
    );
  }

  if (orderConfirmed) {
    return (
      <div className="w-full bg-[#F8F1E8] min-h-screen py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C69A4B] shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#FFF8EF] border-2 border-[#C69A4B] text-[#741525] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 text-[#741525]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-serif font-bold text-[#C69A4B]">
                CONGRATULATIONS & CELEBRATIONS
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#741525]">
                Your Order has been Placed!
              </h1>
              <p className="text-sm text-[#351D19]/80 font-sans max-w-md mx-auto">
                Thank you for choosing Satriva Sarees. Your royal ensemble is being packaged with utmost care in our signature gift box.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF8EF] border border-[#EDE0D0] text-left grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-stone-400 block">Order Number</span>
                <span className="font-serif font-bold text-[#741525] text-sm">
                  {confirmedOrderId}
                </span>
              </div>
              <div>
                <span className="text-stone-400 block">Payment Mode</span>
                <span className="font-semibold text-[#351D19] uppercase">
                  {paymentMethod}
                </span>
              </div>
              <div>
                <span className="text-stone-400 block">Estimated Arrival</span>
                <span className="font-semibold text-emerald-700">
                  Within 3-4 Days
                </span>
              </div>
              <div>
                <span className="text-stone-400 block">Total Paid</span>
                <span className="font-serif font-bold text-[#741525] text-sm">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F8F1E8] rounded-xl text-xs text-[#351D19]/80 text-left">
              <p>
                <strong>Shipping Address:</strong> {formData.name}, {formData.address},{" "}
                {formData.city}, {formData.state} - {formData.pincode}
              </p>
              <p className="mt-1 text-stone-500">
                A confirmation with real-time tracking will be delivered to{" "}
                <strong className="text-[#351D19]">{formData.email}</strong> and{" "}
                <strong className="text-[#351D19]">{formData.phone}</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-widest rounded-md shadow-md transition-colors"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => alert("Downloading official Satriva Tax Invoice & Authenticity Certificate...")}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#C69A4B] text-[#741525] hover:bg-[#FFF8EF] text-xs font-serif font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F8F1E8] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#351D19]/70 mb-6 font-sans">
          <Link href="/" className="hover:text-[#741525] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C69A4B]" />
          <Link href="/shop" className="hover:text-[#741525] transition-colors">
            Sarees
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C69A4B]" />
          <span className="text-[#741525] font-semibold">Secure Checkout</span>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#C69A4B] mb-1">
            <Lock className="w-3.5 h-3.5 text-[#C69A4B]" />
            <span className="text-xs uppercase tracking-widest font-serif font-semibold text-[#741525]">
              ENCRYPTED BOUTIQUE CHECKOUT
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#351D19]">
            Finalize Your Royal Order
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center max-w-xl mx-auto border border-[#EDE0D0] shadow-sm">
            <ShoppingBag className="w-12 h-12 text-[#C69A4B] mx-auto mb-3" />
            <h2 className="text-xl font-serif font-bold text-[#741525]">
              Your Shopping Bag is Empty
            </h2>
            <p className="text-xs text-[#351D19]/70 mt-1">
              Please choose a handcrafted saree from our collection before proceeding to checkout.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-block px-8 py-3 bg-[#741525] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#4A1018] transition-colors"
            >
              Explore Sarees
            </Link>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 cols: Shipping, Contact, Payment Selection */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Contact Information */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-xs space-y-4">
                <h3 className="font-serif font-bold text-base text-[#741525] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#741525] text-white text-xs flex items-center justify-center font-sans">
                    1
                  </span>
                  <span>Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Mobile Number (for delivery updates) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Email Address (for order invoice & tracking) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Address */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-xs space-y-4">
                <h3 className="font-serif font-bold text-base text-[#741525] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#741525] text-white text-xs flex items-center justify-center font-sans">
                    2
                  </span>
                  <span>Shipping Address</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Flat, House No., Building, Apartment & Street *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    >
                      <option>Karnataka</option>
                      <option>Maharashtra</option>
                      <option>Delhi NCR</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>West Bengal</option>
                      <option>Gujarat</option>
                      <option>Uttar Pradesh</option>
                      <option>Rajasthan</option>
                      <option>Kerala</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      maxLength={6}
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full sm:w-1/2 px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Method Selection */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-xs space-y-4">
                <h3 className="font-serif font-bold text-base text-[#741525] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#741525] text-white text-xs flex items-center justify-center font-sans">
                    3
                  </span>
                  <span>Payment Method</span>
                </h3>

                <div className="space-y-3">
                  {/* UPI */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "upi"
                        ? "border-[#741525] bg-[#FFF8EF] ring-1 ring-[#741525]"
                        : "border-[#EDE0D0] hover:bg-[#F8F1E8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="mt-1 text-[#741525]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-[#351D19]">
                          UPI / QR Code (Google Pay, PhonePe, Paytm, BHIM)
                        </span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-semibold">
                          Fastest & Preferred
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Scan instant QR code or enter your UPI VPA handle.
                      </p>
                      {paymentMethod === "upi" && (
                        <div className="mt-3 p-3 bg-white border border-[#EDE0D0] rounded-lg">
                          <input
                            type="text"
                            placeholder="Enter your UPI ID (e.g. mobile@upi)"
                            defaultValue="pooja@okaxis"
                            className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </label>

                  {/* Card */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-[#741525] bg-[#FFF8EF] ring-1 ring-[#741525]"
                        : "border-[#EDE0D0] hover:bg-[#F8F1E8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="mt-1 text-[#741525]"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-xs text-[#351D19] block">
                        Credit / Debit Card (Visa, Mastercard, RuPay, Amex)
                      </span>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Encrypted 256-bit bank level secure transaction.
                      </p>
                      {paymentMethod === "card" && (
                        <div className="mt-3 p-3 bg-white border border-[#EDE0D0] rounded-lg space-y-2">
                          <input
                            type="text"
                            placeholder="Card Number (4111 2222 3333 4444)"
                            defaultValue="•••• •••• •••• 8921"
                            className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              placeholder="MM / YY"
                              defaultValue="12/28"
                              className="px-3 py-2 text-xs border border-gray-300 rounded-md"
                            />
                            <input
                              type="password"
                              placeholder="CVV"
                              defaultValue="•••"
                              className="px-3 py-2 text-xs border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* Net Banking */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "netbanking"
                        ? "border-[#741525] bg-[#FFF8EF] ring-1 ring-[#741525]"
                        : "border-[#EDE0D0] hover:bg-[#F8F1E8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "netbanking"}
                      onChange={() => setPaymentMethod("netbanking")}
                      className="mt-1 text-[#741525]"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-xs text-[#351D19] block">
                        Net Banking (All Major Indian Banks)
                      </span>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        HDFC, ICICI, SBI, Axis, Kotak & 50+ banks.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-md sticky top-28 space-y-5">
                <h3 className="font-serif font-bold text-base text-[#741525] pb-3 border-b border-[#EDE0D0]">
                  Order Summary ({cart.length} items)
                </h3>

                {/* Items preview list */}
                <div className="divide-y divide-[#EDE0D0]/70 max-h-72 overflow-y-auto pr-1 space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                      <div className="relative w-14 h-18 rounded-md overflow-hidden bg-[#F8F1E8] shrink-0 border border-[#EDE0D0]">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-xs font-semibold text-[#351D19] truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-[#C69A4B]">
                          Hue: {item.selectedColor} · Qty: {item.quantity}
                        </p>
                        <p className="text-xs font-bold text-[#741525] mt-0.5">
                          ₹{(item.product.discountedPrice * item.quantity).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 pt-3 border-t border-[#EDE0D0] text-xs">
                  <div className="flex justify-between text-[#351D19]/80">
                    <span>Bag Subtotal</span>
                    <span className="font-semibold text-[#351D19]">
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#351D19]/80">
                    <span>Express Insured Shipping</span>
                    <span className="font-semibold text-emerald-700">
                      {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#741525] pt-3 border-t border-[#EDE0D0] font-serif">
                    <span>Total Amount Payable</span>
                    <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#741525] hover:bg-[#4A1018] disabled:bg-gray-400 text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Confirming Royal Order...</span>
                  ) : (
                    <>
                      <span>Place Order · ₹{grandTotal.toLocaleString("en-IN")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-stone-500">
                  🔒 Encrypted Payment · 100% Genuine Handlooms Guaranteed
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

