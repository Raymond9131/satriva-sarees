"use client";

import React from "react";
import { useCartWishlist } from "@/context/CartWishlistContext";
import { CheckCircle2, Info, X } from "lucide-react";

export default function Toast() {
  const { toast, clearToast } = useCartWishlist();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#4A1018] text-[#FFF8EF] border border-[#C69A4B] rounded-lg shadow-xl p-3.5 flex items-center gap-3">
        {toast.type === "success" ? (
          <CheckCircle2 className="w-5 h-5 text-[#C69A4B] shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-[#DFC489] shrink-0" />
        )}
        <p className="text-xs font-sans font-medium flex-1 pr-1">{toast.message}</p>
        <button
          onClick={clearToast}
          className="text-[#FFF8EF]/70 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

