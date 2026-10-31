"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Filter,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import LotusIcon, { LotusDivider } from "@/components/LotusIcon";
import { PRODUCTS, COLLECTIONS } from "@/data/products";
import { SareeCategory } from "@/types";
import { useCartWishlist } from "@/context/CartWishlistContext";

function ShopContent() {
  const { wishlist } = useCartWishlist();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialFilter = searchParams.get("filter");
  const searchQuery = searchParams.get("q") || "";
  const initialView = searchParams.get("view");

  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "all"
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedFabric, setSelectedFabric] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available Fabric options
  const fabrics = [
    "Pure Mulberry Silk",
    "Katan Silk",
    "Crêpe Georgette",
    "Silk Velvet",
    "Glass Organza",
    "Tussar Silk",
    "Chanderi Cotton Silk",
  ];

  // Available Color swatches
  const colorOptions = [
    { name: "Maroon", hex: "#741525" },
    { name: "Burgundy", hex: "#4A1018" },
    { name: "Crimson", hex: "#A81829" },
    { name: "Plum", hex: "#3B1042" },
    { name: "Teal", hex: "#0F4C5C" },
    { name: "Gold", hex: "#C69A4B" },
    { name: "Pink", hex: "#E88D9E" },
    { name: "Ivory", hex: "#FFF8EF" },
  ];

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Search Query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesFabric = p.fabric.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory && !matchesFabric) return false;
      }

      // Category
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // Preset Filter from query
      if (initialFilter === "new" && !p.isNew) return false;
      if (initialFilter === "bestseller" && !p.isBestSeller) return false;
      if (initialView === "wishlist" && !wishlist.includes(p.id)) return false;

      // Price Range
      if (selectedPriceRange === "under-5000" && p.discountedPrice >= 5000) return false;
      if (
        selectedPriceRange === "5000-10000" &&
        (p.discountedPrice < 5000 || p.discountedPrice > 10000)
      )
        return false;
      if (
        selectedPriceRange === "10000-15000" &&
        (p.discountedPrice < 10000 || p.discountedPrice > 15000)
      )
        return false;
      if (selectedPriceRange === "above-15000" && p.discountedPrice < 15000) return false;

      // Fabric
      if (selectedFabric !== "all" && !p.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) {
        return false;
      }

      // Color
      if (selectedColor !== "all") {
        const matchesMainColor = p.color.toLowerCase().includes(selectedColor.toLowerCase());
        const matchesVariants = p.availableColors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!matchesMainColor && !matchesVariants) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.discountedPrice - b.discountedPrice;
      if (sortBy === "price-high") return b.discountedPrice - a.discountedPrice;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "discount") return b.discountPercentage - a.discountPercentage;
      return 0; // featured default
    });
  }, [
    selectedCategory,
    selectedPriceRange,
    selectedFabric,
    selectedColor,
    sortBy,
    searchQuery,
    initialFilter,
    initialView,
    wishlist,
  ]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedFabric("all");
    setSelectedColor("all");
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedPriceRange !== "all" ||
    selectedFabric !== "all" ||
    selectedColor !== "all";

  return (
    <div className="w-full bg-[#F8F1E8] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#351D19]/70 mb-6 font-sans">
          <Link href="/" className="hover:text-[#741525] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C69A4B]" />
          <Link href="/shop" className="hover:text-[#741525] transition-colors">
            Shop All Sarees
          </Link>
          {selectedCategory !== "all" && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#C69A4B]" />
              <span className="text-[#741525] font-semibold">{selectedCategory}</span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#C69A4B] mb-1">
            <LotusIcon className="w-4 h-4 text-[#C69A4B]" />
            <span className="text-xs uppercase tracking-widest font-serif font-semibold text-[#741525]">
              HANDCRAFTED HERITAGE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#351D19]">
            {initialView === "wishlist"
              ? "Your Saved Sarees Wishlist"
              : selectedCategory === "all"
              ? "The Royal Saree Treasury"
              : selectedCategory}
          </h1>
          <p className="text-xs sm:text-sm text-[#351D19]/75 max-w-xl mx-auto mt-2 font-sans">
            Every weave is a celebration of Indian craftsmanship, woven with master precision and blessed with timeless allure.
          </p>
        </div>

        {/* Category Horizontal Pill Selector */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-serif shrink-0 transition-all ${
              selectedCategory === "all"
                ? "bg-[#741525] text-white shadow-sm font-semibold"
                : "bg-white border border-[#EDE0D0] text-[#351D19] hover:border-[#741525]"
            }`}
          >
            All Collections ({PRODUCTS.length})
          </button>
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.name)}
              className={`px-4 py-2 rounded-full text-xs font-serif shrink-0 transition-all ${
                selectedCategory === c.name
                  ? "bg-[#741525] text-white shadow-sm font-semibold"
                  : "bg-white border border-[#EDE0D0] text-[#351D19] hover:border-[#741525]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Toolbar: Count, Mobile Filter Trigger, Sorting */}
        <div className="bg-white rounded-xl p-4 border border-[#EDE0D0] mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-3.5 py-2 bg-[#F8F1E8] border border-[#EDE0D0] rounded-md text-xs font-medium text-[#351D19] flex items-center gap-2 hover:bg-[#EDE0D0]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#741525]" />
              <span>Filters {hasActiveFilters && "•"}</span>
            </button>

            <span className="text-xs text-[#351D19]/80 font-medium">
              Showing <strong className="text-[#741525]">{filteredProducts.length}</strong> masterpieces
            </span>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="hidden sm:flex items-center gap-1.5 text-xs text-[#741525] hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}

            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#351D19]/70 hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-[#F8F1E8] border border-[#EDE0D0] rounded-md text-xs font-serif text-[#351D19] focus:ring-1 focus:ring-[#741525]"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Patron Rating</option>
                <option value="discount">Highest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-5 border border-[#EDE0D0] shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE0D0]">
                <h3 className="font-serif font-bold text-sm text-[#741525] flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#C69A4B]" />
                  <span>Refine Collection</span>
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] text-[#741525] hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-xs font-serif font-semibold text-[#351D19] uppercase tracking-wider mb-2.5">
                  Category
                </h4>
                <div className="space-y-1.5 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-[#351D19]/80 hover:text-[#741525]">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                      className="text-[#741525] focus:ring-[#741525]"
                    />
                    <span>All Sarees</span>
                  </label>
                  {COLLECTIONS.map((c) => (
                    <label
                      key={c.id}
                      className="flex items-center gap-2 cursor-pointer text-[#351D19]/80 hover:text-[#741525]"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === c.name}
                        onChange={() => setSelectedCategory(c.name)}
                        className="text-[#741525] focus:ring-[#741525]"
                      />
                      <span>{c.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="pt-4 border-t border-[#EDE0D0]">
                <h4 className="text-xs font-serif font-semibold text-[#351D19] uppercase tracking-wider mb-2.5">
                  Price
                </h4>
                <div className="space-y-1.5 text-xs">
                  {[
                    { id: "all", label: "All Prices" },
                    { id: "under-5000", label: "Under ₹5,000" },
                    { id: "5000-10000", label: "₹5,000 – ₹10,000" },
                    { id: "10000-15000", label: "₹10,000 – ₹15,000" },
                    { id: "above-15000", label: "Above ₹15,000" },
                  ].map((p) => (
                    <label
                      key={p.id}
                      className="flex items-center gap-2 cursor-pointer text-[#351D19]/80 hover:text-[#741525]"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === p.id}
                        onChange={() => setSelectedPriceRange(p.id)}
                        className="text-[#741525] focus:ring-[#741525]"
                      />
                      <span>{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fabric Filter */}
              <div className="pt-4 border-t border-[#EDE0D0]">
                <h4 className="text-xs font-serif font-semibold text-[#351D19] uppercase tracking-wider mb-2.5">
                  Fabric & Weave
                </h4>
                <div className="space-y-1.5 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-[#351D19]/80 hover:text-[#741525]">
                    <input
                      type="radio"
                      name="fabric"
                      checked={selectedFabric === "all"}
                      onChange={() => setSelectedFabric("all")}
                      className="text-[#741525] focus:ring-[#741525]"
                    />
                    <span>All Fabrics</span>
                  </label>
                  {fabrics.map((f) => (
                    <label
                      key={f}
                      className="flex items-center gap-2 cursor-pointer text-[#351D19]/80 hover:text-[#741525]"
                    >
                      <input
                        type="radio"
                        name="fabric"
                        checked={selectedFabric === f}
                        onChange={() => setSelectedFabric(f)}
                        className="text-[#741525] focus:ring-[#741525]"
                      />
                      <span>{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Swatch Filter */}
              <div className="pt-4 border-t border-[#EDE0D0]">
                <h4 className="text-xs font-serif font-semibold text-[#351D19] uppercase tracking-wider mb-2.5">
                  Color Shade
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => setSelectedColor("all")}
                    className={`col-span-4 text-xs py-1 px-2 rounded-md border text-left ${
                      selectedColor === "all"
                        ? "bg-[#741525] text-white border-[#741525]"
                        : "border-[#EDE0D0] text-[#351D19]"
                    }`}
                  >
                    All Shades
                  </button>
                  {colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex flex-col items-center p-1.5 rounded-md border text-[10px] transition-all ${
                        selectedColor === c.name
                          ? "border-[#741525] bg-[#FFF8EF] ring-1 ring-[#741525]"
                          : "border-[#EDE0D0] hover:bg-[#F8F1E8]"
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 mb-1"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="truncate w-full text-center">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#EDE0D0] shadow-xs">
                <LotusIcon className="w-12 h-12 text-[#C69A4B] mx-auto mb-3" />
                <h3 className="text-lg font-serif font-bold text-[#741525]">
                  No Sarees Match Your Selected Filters
                </h3>
                <p className="text-xs text-[#351D19]/70 mt-1 max-w-sm mx-auto">
                  Try clearing some filter criteria or searching for different fabrics or collections.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-5 px-6 py-2.5 bg-[#741525] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#4A1018] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#EDE0D0]">
                <h3 className="font-serif font-bold text-base text-[#741525]">Filter Sarees</h3>
                <button onClick={() => setMobileFilterOpen(false)}>
                  <X className="w-5 h-5 text-[#351D19]" />
                </button>
              </div>

              {/* Mobile Filter Sections */}
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-xs font-semibold text-[#351D19] uppercase mb-2">Category</h4>
                  <div className="space-y-1.5 text-xs">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={selectedCategory === "all"}
                        onChange={() => setSelectedCategory("all")}
                      />
                      <span>All Sarees</span>
                    </label>
                    {COLLECTIONS.map((c) => (
                      <label key={c.id} className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={selectedCategory === c.name}
                          onChange={() => setSelectedCategory(c.name)}
                        />
                        <span>{c.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EDE0D0]">
                  <h4 className="text-xs font-semibold text-[#351D19] uppercase mb-2">Price</h4>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { id: "all", label: "All Prices" },
                      { id: "under-5000", label: "Under ₹5,000" },
                      { id: "5000-10000", label: "₹5,000 – ₹10,000" },
                      { id: "10000-15000", label: "₹10,000 – ₹15,000" },
                      { id: "above-15000", label: "Above ₹15,000" },
                    ].map((p) => (
                      <label key={p.id} className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={selectedPriceRange === p.id}
                          onChange={() => setSelectedPriceRange(p.id)}
                        />
                        <span>{p.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EDE0D0] space-y-2">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#741525] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2 bg-transparent text-xs text-[#741525] font-semibold"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F8F1E8]">
          <LotusIcon className="w-10 h-10 text-[#C69A4B] animate-pulse" />
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
