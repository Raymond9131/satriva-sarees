"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Truck,
  User,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import LotusIcon from "./LotusIcon";
import { useCartWishlist } from "@/context/CartWishlistContext";
import { PRODUCTS } from "@/data/products";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { isMounted, cartCount, wishlistCount, openCart } = useCartWishlist();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [trackOrderOpen, setTrackOrderOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [trackingStatus, setTrackingStatus] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop", hasMega: true },
    { name: "New Arrivals", href: "/shop?filter=new" },
    { name: "Best Sellers", href: "/shop?filter=bestseller" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const filteredSearchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setTrackingStatus(
        `Order #${trackingId.toUpperCase()} is currently In Transit via BlueDart Express. Expected Delivery: 2 Days.`
      );
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "shadow-md bg-white/98 backdrop-blur-md" : "shadow-2xs bg-white"
      }`}
    >
      {/* 1. Top Announcement Bar (Exact match to Reference Screenshot 1) */}
      <div className="bg-[#741525] text-white text-[11px] md:text-xs py-1.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Free shipping promo */}
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-white/90" />
            <span className="font-light tracking-wide text-white/95">
              Free Shipping on Orders Above ₹999
            </span>
          </div>

          {/* Right: Track order, login, social */}
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTrackOrderOpen(true)}
                className="hover:text-[#DFC489] transition-colors"
              >
                Track Order
              </button>
              <span className="text-white/40">|</span>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="hover:text-[#DFC489] transition-colors"
              >
                Login / Register
              </button>
            </div>

            <div className="flex items-center gap-2.5 text-white/90 pl-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DFC489] transition-colors p-0.5"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DFC489] transition-colors p-0.5"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DFC489] transition-colors p-0.5"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Exact match to Reference Screenshot 1) */}
      <div className="bg-white border-b border-[#EDE0D0]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Official Logo on Left (Round Gold Emblem) */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 py-1">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#C69A4B] via-[#E5C378] to-[#9E1C2A] shadow-md group-hover:scale-105 transition-transform">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF6F0]">
                <Image
                  src="/logo/satriva-logo.jpg"
                  alt="Satriva Sarees Official Logo"
                  fill
                  sizes="56px"
                  className="object-cover scale-[1.1]"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#741525] uppercase leading-none">
                SATRIVA
              </span>
              <span className="text-[10px] tracking-[0.32em] text-[#C69A4B] font-semibold uppercase mt-0.5 font-serif text-center">
                SAREES
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("?")[0]));

              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 font-serif text-sm tracking-normal transition-colors py-1 ${
                        isActive
                          ? "text-[#741525] font-semibold"
                          : "text-[#351D19]/85 hover:text-[#741525]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#741525] rounded-full" />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {megaMenuOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] bg-white rounded-xl shadow-2xl border border-[#EDE0D0] p-6 z-50 animate-slide-up">
                        <div className="grid grid-cols-3 gap-6 text-left">
                          <div>
                            <h4 className="text-xs font-semibold text-[#741525] uppercase tracking-wider mb-3">
                              By Category
                            </h4>
                            <ul className="space-y-2 text-xs text-[#351D19]/80">
                              {[
                                "Silk Sarees",
                                "Party Wear Sarees",
                                "Traditional Sarees",
                                "Designer Sarees",
                                "Daily Wear Sarees",
                                "Wedding Sarees",
                              ].map((cat) => (
                                <li key={cat}>
                                  <Link
                                    href={`/shop?category=${encodeURIComponent(cat)}`}
                                    onClick={() => setMegaMenuOpen(false)}
                                    className="hover:text-[#741525] transition-colors block py-0.5"
                                  >
                                    {cat}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-[#741525] uppercase tracking-wider mb-3">
                              Handcrafted Weaves
                            </h4>
                            <ul className="space-y-2 text-xs text-[#351D19]/80">
                              {[
                                "Pure Mulberry Silk",
                                "Zari Brocade",
                                "Crêpe Georgette",
                                "Fine Handloom Cotton",
                              ].map((fab) => (
                                <li key={fab}>
                                  <Link
                                    href={`/shop?fabric=${encodeURIComponent(fab)}`}
                                    onClick={() => setMegaMenuOpen(false)}
                                    className="hover:text-[#741525] transition-colors block py-0.5"
                                  >
                                    {fab}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 pt-3 border-t border-[#EDE0D0]/60">
                              <Link
                                href="/shop?filter=bestseller"
                                onClick={() => setMegaMenuOpen(false)}
                                className="text-xs font-medium text-[#C69A4B] hover:text-[#741525] flex items-center gap-1"
                              >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Explore Bestsellers</span>
                              </Link>
                            </div>
                          </div>
                          <div className="bg-[#FAF5EE] rounded-lg p-3.5 border border-[#EDE0D0] flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C69A4B] block mb-1">
                                Curated Edit
                              </span>
                              <h5 className="font-serif text-sm font-bold text-[#741525] mb-1">
                                Royal Bridal Trousseau
                              </h5>
                              <p className="text-[11px] text-[#351D19]/70 leading-relaxed mb-3">
                                Pure silk and hand-embellished zari drapes for life&apos;s grandest moments.
                              </p>
                            </div>
                            <Link
                              href="/shop?category=Wedding%20Sarees"
                              onClick={() => setMegaMenuOpen(false)}
                              className="w-full py-1.5 bg-[#741525] text-white text-[11px] font-semibold text-center rounded-sm hover:bg-[#4A1018] transition-colors"
                            >
                              Shop Bridal Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-serif text-sm tracking-normal transition-colors py-1 ${
                    isActive
                      ? "text-[#741525] font-semibold"
                      : "text-[#351D19]/85 hover:text-[#741525]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#741525] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons (Search, Wishlist, Bag with 0 count) */}
          <div className="flex items-center space-x-4 sm:space-x-5 text-[#351D19]">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-[#741525] p-1 transition-colors"
              aria-label="Search Sarees"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Wishlist Link */}
            <Link
              href="/shop?view=wishlist"
              className="relative hover:text-[#741525] p-1 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {isMounted && wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#741525] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Bag Trigger */}
            <button
              onClick={openCart}
              className="relative hover:text-[#741525] p-1 transition-colors"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#741525] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {isMounted ? cartCount : 0}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 hover:text-[#741525]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dropdown Live Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#EDE0D0] bg-[#FFF8EF] px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search pure silk, banarasi, zardozi, organza sarees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-24 py-3 bg-white border border-[#C69A4B]/60 rounded-full text-sm text-[#351D19] placeholder:text-[#351D19]/50 focus:outline-hidden focus:ring-2 focus:ring-[#741525]"
                />
                <Search className="w-5 h-5 absolute left-4 top-3.5 text-[#C69A4B]" />
                <button
                  type="submit"
                  className="absolute right-2 top-2 px-4 py-1.5 bg-[#741525] text-white text-xs font-semibold rounded-full hover:bg-[#4A1018] transition-colors"
                >
                  Search
                </button>
              </form>

              {!searchQuery.trim() && (
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-[#351D19]/60 font-medium">
                    Trending Searches:
                  </span>
                  {[
                    "Kanjivaram Silk",
                    "Party Wear",
                    "Wedding Saree",
                    "Plum Sequin",
                    "Banarasi Zari",
                    "Daily Wear",
                  ].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        router.push(`/shop?q=${encodeURIComponent(tag)}`);
                        setSearchOpen(false);
                      }}
                      className="text-xs px-3 py-1 bg-white hover:bg-[#741525] text-[#351D19] hover:text-white rounded-full border border-[#EDE0D0] transition-colors shadow-2xs"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}

              {searchQuery.trim() && (
                <div className="mt-3 bg-white rounded-lg border border-[#EDE0D0] p-2 shadow-md">
                  {filteredSearchResults.length > 0 ? (
                    <div className="divide-y divide-[#EDE0D0]/60">
                      {filteredSearchResults.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/product/${prod.id}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center gap-3 p-2 hover:bg-[#F8F1E8] transition-colors rounded-md"
                        >
                          <div className="relative w-10 h-12 rounded-xs overflow-hidden shrink-0">
                            <Image
                              src={prod.images[0]}
                              alt={prod.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-serif font-medium text-[#351D19] truncate">
                              {prod.name}
                            </p>
                            <p className="text-[11px] text-[#C69A4B]">
                              {prod.category} · ₹{prod.discountedPrice.toLocaleString("en-IN")}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-center py-4 text-[#351D19]/70">
                      No matching sarees found. Try &quot;Banarasi&quot;, &quot;Silk&quot; or &quot;Wedding&quot;.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-[#FFF8EF] h-full shadow-2xl flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#EDE0D0]">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#C69A4B] via-[#E5C378] to-[#9E1C2A] shadow-xs shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF6F0]">
                      <Image
                        src="/logo/satriva-logo.jpg"
                        alt="Satriva Sarees Logo"
                        fill
                        sizes="36px"
                        className="object-cover scale-[1.1]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-base tracking-[0.18em] text-[#741525] uppercase leading-none">
                      SATRIVA
                    </span>
                    <span className="text-[9px] tracking-[0.28em] text-[#C69A4B] font-semibold uppercase mt-0.5 font-serif">
                      SAREES
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#351D19] p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-base text-[#351D19] hover:text-[#741525] py-1 border-b border-[#EDE0D0]/50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EDE0D0] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTrackOrderOpen(true);
                }}
                className="w-full text-left text-xs text-[#351D19] font-medium flex items-center gap-2 py-1"
              >
                <Truck className="w-4 h-4 text-[#741525]" /> Track Your Order
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
                className="w-full text-left text-xs text-[#351D19] font-medium flex items-center gap-2 py-1"
              >
                <User className="w-4 h-4 text-[#741525]" /> Customer Login / Register
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* Login / Register Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFF8EF] border border-[#C69A4B] rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#C69A4B] via-[#E5C378] to-[#9E1C2A] shadow-md mx-auto mb-2">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF6F0]">
                  <Image
                    src="/logo/satriva-logo.jpg"
                    alt="Satriva Sarees Logo"
                    fill
                    sizes="64px"
                    className="object-cover scale-[1.1]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#741525]">Welcome to Satriva Sarees</h3>
              <p className="text-xs text-[#351D19]/70 mt-1">
                Enter your mobile number or email to sign in or create your boutique account
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Welcome! You are now logged in as a Satriva Privileged Guest.");
                setLoginModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-[#351D19] mb-1">
                  Mobile Number / Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 91318 89706 or yourname@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#741525] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#4A1018] transition-colors"
              >
                Send Verification OTP
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Track Order Modal */}
      {trackOrderOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFF8EF] border border-[#C69A4B] rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => {
                setTrackOrderOpen(false);
                setTrackingStatus(null);
                setTrackingId("");
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-4">
              <Truck className="w-8 h-8 text-[#741525] mx-auto mb-2" />
              <h3 className="text-xl font-serif font-bold text-[#741525]">Track Your Shipment</h3>
              <p className="text-xs text-[#351D19]/70 mt-1">
                Enter your order ID (e.g. SAT-8942) or tracking number
              </p>
            </div>
            <form onSubmit={handleTrackOrder} className="space-y-3">
              <input
                type="text"
                required
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="e.g. SAT-78921"
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#741525] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#4A1018] transition-colors"
              >
                Track Now
              </button>
            </form>
            {trackingStatus && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-md text-xs text-emerald-800">
                {trackingStatus}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
