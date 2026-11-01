"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";
import LotusIcon from "./LotusIcon";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-[#4A1018] text-[#FFF8EF] relative overflow-hidden">
      {/* Decorative background radial pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C69A4B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-[#DFC489] mb-2">
          <LotusIcon className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em]">
            Privileged Access
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white tracking-tight">
          Join the Satriva Royal Circle
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
          Receive private previews of limited-edition handloom drops, invitation-only trunk shows, and complimentary silk care insights directly in your inbox.
        </p>

        {isSubscribed ? (
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#2E7D32]/20 border border-[#2E7D32]/60 text-[#81C784] rounded-full text-xs font-medium animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Welcome to the Royal Circle! You have successfully subscribed for exclusive handloom previews.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5"
          >
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-md text-xs text-white placeholder:text-stone-400 focus:outline-hidden focus:border-[#DFC489] focus:bg-white/15 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#C69A4B] hover:bg-[#A17830] text-[#351D19] font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-all duration-300 hover:scale-102 flex items-center justify-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </button>
          </form>
        )}

        <p className="mt-3 text-[10px] text-stone-400">
          We honor your privacy. Unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
}

