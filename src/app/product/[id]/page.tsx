"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  ShoppingBag,
  Zap,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Share2,
  Check,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCartWishlist } from "@/context/CartWishlistContext";
import ProductCard from "@/components/ProductCard";
import LotusIcon, { LotusDivider } from "@/components/LotusIcon";

function ProductDetailContent() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"desc" | "spec" | "care">("desc");
  const [copiedShare, setCopiedShare] = useState(false);

  const isFavorited = isInWishlist(product.id);

  // Related products from same category or bestsellers
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).concat(PRODUCTS.filter((p) => p.id !== product.id)).slice(0, 4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomCoords({ x, y });
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus(`✨ Express Delivery Available to ${pincode} by Tuesday! Insured Express Shipping.`);
    } else {
      setPincodeStatus("Please enter a valid 6-digit Indian Postal Pincode.");
    }
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    router.push("/checkout");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#F8F1E8] min-h-screen py-6 sm:py-10">
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
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#741525] transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C69A4B]" />
          <span className="text-[#741525] font-semibold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#EDE0D0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image Gallery & Interactive Zoom */}
          <div className="lg:col-span-6 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    activeImage === index
                      ? "border-[#741525] shadow-md ring-2 ring-[#741525]/20 scale-102"
                      : "border-[#EDE0D0] opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} View ${index + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>

            {/* Main Image with Zoom Lens */}
            <div className="flex-1 relative aspect-3/4 rounded-xl overflow-hidden bg-[#F8F1E8] border border-[#EDE0D0] group">
              <div
                className="relative w-full h-full cursor-crosshair"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={product.images[activeImage] || product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  className={`object-cover object-top transition-transform duration-200 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                        }
                      : undefined
                  }
                />

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                  {product.isBestSeller && (
                    <span className="px-2.5 py-1 bg-[#C69A4B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm">
                      Best Seller
                    </span>
                  )}
                </div>

                {/* Hover Lens Hint */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full opacity-80 group-hover:opacity-0 transition-opacity pointer-events-none">
                  Hover to Zoom
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Commerce Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Collection */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C69A4B] font-serif font-bold">
                  {product.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 text-stone-500 hover:text-[#741525] rounded-full hover:bg-[#F8F1E8] transition-colors relative"
                    title="Share Saree"
                  >
                    {copiedShare ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-2 rounded-full border transition-colors ${
                      isFavorited
                        ? "bg-[#741525] text-white border-[#741525]"
                        : "border-[#EDE0D0] text-[#351D19] hover:text-[#741525]"
                    }`}
                    title="Save to Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`}
                    />
                  </button>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#351D19] mt-2 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mt-3 text-xs">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? "fill-current text-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="font-bold text-[#351D19] ml-1">
                    {product.rating}
                  </span>
                </div>
                <span className="text-stone-300">|</span>
                <span className="text-stone-600 font-medium">
                  {product.reviewsCount} Patron Reviews
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-400">SKU: {product.sku}</span>
              </div>

              {/* Price Banner */}
              <div className="mt-5 p-4 rounded-xl bg-[#FFF8EF] border border-[#EDE0D0] flex flex-wrap items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#741525]">
                  ₹{product.discountedPrice.toLocaleString("en-IN")}
                </span>
                <span className="px-2.5 py-0.5 bg-[#741525]/10 text-[#741525] text-xs font-semibold uppercase tracking-wider rounded-sm">
                  Fixed Price
                </span>
                <p className="w-full text-[11px] text-stone-500 mt-1">
                  Inclusive of all taxes · Free insured express shipping across India
                </p>
              </div>

              {/* Color Selection */}
              {product.availableColors && product.availableColors.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between text-xs font-medium text-[#351D19] mb-2">
                    <span>
                      Select Saree Hue: <strong className="text-[#741525]">{selectedColor}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {product.availableColors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                          selectedColor === c.name
                            ? "border-[#741525] bg-[#FFF8EF] shadow-xs ring-1 ring-[#741525] font-semibold text-[#741525]"
                            : "border-gray-200 bg-white text-stone-700 hover:border-gray-300"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Add to Bag & Buy Now */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity */}
                  <div className="flex items-center border border-[#EDE0D0] rounded-md bg-[#FFF8EF]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2.5 text-xs text-[#351D19] hover:bg-[#EDE0D0] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 text-xs font-semibold text-[#351D19]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2.5 text-xs text-[#351D19] hover:bg-[#EDE0D0] transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product, quantity, selectedColor)}
                    className="flex-1 py-3 px-6 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>

                {/* Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  className="w-full py-3 px-6 bg-[#C69A4B] hover:bg-[#A17830] text-[#351D19] text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg font-serif"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Instant Buy Now</span>
                </button>
              </div>

              {/* Pincode Checker */}
              <div className="mt-6 p-4 rounded-xl border border-[#EDE0D0] bg-[#F8F1E8]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-serif font-semibold text-[#351D19]">
                  <MapPin className="w-4 h-4 text-[#741525]" />
                  <span>Check Express Delivery Availability</span>
                </div>
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter 6-digit Pincode (e.g. 560001)"
                    className="flex-1 px-3 py-2 bg-white border border-[#EDE0D0] rounded-md text-xs text-[#351D19] focus:outline-hidden focus:ring-1 focus:ring-[#741525]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#351D19] hover:bg-[#741525] text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <p className="text-xs text-[#741525] font-medium pt-1">
                    {pincodeStatus}
                  </p>
                )}
              </div>

              {/* Guarantees & Badges */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-[#EDE0D0] text-center">
                <div className="flex flex-col items-center text-[#351D19]/80">
                  <ShieldCheck className="w-5 h-5 text-[#C69A4B] mb-1" />
                  <span className="text-[11px] font-semibold">100% Genuine Handloom</span>
                </div>
                <div className="flex flex-col items-center text-[#351D19]/80">
                  <Truck className="w-5 h-5 text-[#C69A4B] mb-1" />
                  <span className="text-[11px] font-semibold">Free Express Delivery</span>
                </div>
                <div className="flex flex-col items-center text-[#351D19]/80">
                  <RotateCcw className="w-5 h-5 text-[#C69A4B] mb-1" />
                  <span className="text-[11px] font-semibold">7-Day Hassle Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Description, Specifications, Care */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#EDE0D0] shadow-sm">
          {/* Tabs header */}
          <div className="flex border-b border-[#EDE0D0] space-x-8">
            {[
              { id: "desc", label: "Artisan Tale & Description" },
              { id: "spec", label: "Specifications & Dimensions" },
              { id: "care", label: "Wash & Preservation Guide" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "desc" | "spec" | "care")}
                className={`pb-3 text-xs sm:text-sm font-serif transition-colors relative ${
                  activeTab === tab.id
                    ? "font-bold text-[#741525]"
                    : "text-stone-500 hover:text-[#741525]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#741525] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="py-6 text-xs sm:text-sm text-[#351D19]/85 font-sans leading-relaxed">
            {activeTab === "desc" && (
              <div className="space-y-4">
                <p>{product.description}</p>
                <p>
                  Every Satriva saree is individually examined by our master curators to
                  ensure impeccable warp and weft tension, luminous zari lustre, and authentic
                  silk hallmarks. Draped in this creation, you carry forward an unbroken
                  legacy of regal Indian textile tradition.
                </p>
                <div className="bg-[#FFF8EF] p-4 rounded-xl border border-[#EDE0D0] mt-4 flex items-center gap-3">
                  <LotusIcon className="w-6 h-6 text-[#C69A4B] shrink-0" />
                  <p className="text-xs text-[#741525] font-serif italic">
                    &quot;Grace in Every Drape – handcrafted with pure dedication to celebrate your royal presence.&quot;
                  </p>
                </div>
              </div>
            )}

            {activeTab === "spec" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-[#F8F1E8] rounded-md">
                  <span className="text-[11px] text-stone-500 block">Saree Fabric</span>
                  <span className="font-semibold text-[#351D19]">{product.fabric}</span>
                </div>
                <div className="p-3 bg-[#F8F1E8] rounded-md">
                  <span className="text-[11px] text-stone-500 block">Weave Craftsmanship</span>
                  <span className="font-semibold text-[#351D19]">{product.weaveType}</span>
                </div>
                <div className="p-3 bg-[#F8F1E8] rounded-md">
                  <span className="text-[11px] text-stone-500 block">Saree Length</span>
                  <span className="font-semibold text-[#351D19]">{product.length}</span>
                </div>
                <div className="p-3 bg-[#F8F1E8] rounded-md">
                  <span className="text-[11px] text-stone-500 block">Blouse Piece Included</span>
                  <span className="font-semibold text-[#351D19]">{product.blousePiece}</span>
                </div>
                <div className="p-3 bg-[#F8F1E8] rounded-md">
                  <span className="text-[11px] text-stone-500 block">Recommended Occasion</span>
                  <span className="font-semibold text-[#351D19]">{product.occasion}</span>
                </div>
                <div className="p-3 bg-[#F8F1E8] rounded-md">
                  <span className="text-[11px] text-stone-500 block">Origin / Handcrafted At</span>
                  <span className="font-semibold text-[#351D19]">Varanasi & Southern Looms, India</span>
                </div>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-3">
                <p>
                  <strong>Maintenance:</strong> {product.care}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                  <li>Never machine-wash pure zari or silk handlooms.</li>
                  <li>Store in breathable unbleached pure cotton or muslin fabric covers.</li>
                  <li>Refold periodically along different crease lines to preserve the zari strands.</li>
                  <li>Iron on low silk setting with a protective cotton cloth over embroidery.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Sarees */}
        <div className="mt-16">
          <LotusDivider
            title="Complete the Royal Look"
            subtitle="Explore complimentary handwoven sarees admired by our patrons."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Sticky Mobile Add to Cart Bar (Shopify Prestige Style) */}
        <div className="fixed bottom-0 inset-x-0 bg-white border-t border-[#EDE0D0] p-3 shadow-2xl z-40 sm:hidden flex items-center justify-between gap-3 animate-slide-up">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-10 h-12 rounded-xs overflow-hidden shrink-0 bg-[#F8F1E8]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-[#741525] truncate">
                ₹{product.discountedPrice.toLocaleString("en-IN")}
              </p>
              <p className="text-[10px] text-stone-500 truncate">
                {selectedColor}
              </p>
            </div>
          </div>

          <button
            onClick={() => addToCart(product, quantity, selectedColor)}
            className="flex-1 max-w-[180px] py-2.5 bg-[#741525] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F8F1E8]">
          <LotusIcon className="w-10 h-10 text-[#C69A4B] animate-pulse" />
        </div>
      }
    >
      <ProductDetailContent />
    </React.Suspense>
  );
}
