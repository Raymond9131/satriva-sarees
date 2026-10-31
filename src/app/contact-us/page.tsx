"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import LotusIcon, { LotusDivider } from "@/components/LotusIcon";

export default function ContactUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Bridal Styling Consultation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "Are all Satriva sarees 100% genuine pure silk?",
      a: "Yes, without exception. Our pure silk collections carry the Silk Mark guarantee and are woven with authentic mulberry or tussar silk and certified gold/silver zari threads.",
    },
    {
      q: "How long does shipping take within India?",
      a: "Orders are dispatched via BlueDart Air Express within 24-48 business hours. Delivery typically takes 2-4 business days across major Indian metros.",
    },
    {
      q: "Can I book a personalized video consultation for my wedding trousseau?",
      a: "Absolutely! Our royal stylists provide complimentary 1-on-1 WhatsApp video walkthroughs to show drape, lustre, and border details under natural lighting.",
    },
    {
      q: "What is your return & exchange policy?",
      a: "We offer a 7-day hassle-free return and exchange policy from the date of doorstep delivery for unstitched sarees in original packaging with tags intact.",
    },
  ];

  return (
    <div className="w-full bg-[#F8F1E8] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#C69A4B] mb-1">
            <LotusIcon className="w-5 h-5 text-[#C69A4B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-serif font-bold text-[#741525]">
              AT YOUR SERVICE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#351D19]">
            Connect With Our Concierge
          </h1>
          <p className="text-xs sm:text-sm text-[#351D19]/75 mt-2 font-sans">
            Whether inquiring about an auspicious bridal drape or tracking an existing shipment, our stylists are delighted to assist you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF8EF] border border-[#C69A4B] flex items-center justify-center shrink-0 text-[#741525]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#741525]">Flagship Boutique</h3>
              <p className="text-xs text-[#351D19]/80 mt-1 leading-relaxed">
                Satriva Sarees Mansion, 100 Feet Road, Indiranagar, Bangalore, Karnataka - 560038
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF8EF] border border-[#C69A4B] flex items-center justify-center shrink-0 text-[#741525]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#741525]">Direct Concierge</h3>
              <p className="text-xs text-[#351D19]/80 mt-1">
                Voice: +91 98765 43210
              </p>
              <p className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Stylist Available
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EDE0D0] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF8EF] border border-[#C69A4B] flex items-center justify-center shrink-0 text-[#741525]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#741525]">Boutique Hours</h3>
              <p className="text-xs text-[#351D19]/80 mt-1">
                Monday to Saturday: 10:00 AM – 8:00 PM IST
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Sunday: By Prior Appointment Only
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Side Visual */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EDE0D0] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-serif font-bold text-[#741525] mb-1">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#351D19]/70 mb-6">
              Our royal stylist will reply within 4 hours during business hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#FFF8EF] rounded-2xl border border-[#C69A4B] text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#741525] mx-auto" />
                <h3 className="font-serif font-bold text-lg text-[#741525]">
                  Message Received with Honor
                </h3>
                <p className="text-xs text-[#351D19]/80 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name || "valued patron"}</strong>. Our senior saree stylist has been notified and will reach out shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-6 py-2 bg-[#741525] text-white text-xs font-semibold rounded-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Iyer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#351D19] mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                    >
                      <option>Bridal Styling Consultation</option>
                      <option>Custom Handloom Weave Order</option>
                      <option>Order Tracking & Delivery Status</option>
                      <option>Wholesale / Boutique Partnership</option>
                      <option>General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#351D19] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the occasion, preferred colors, or any specific weaves you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FFF8EF] border border-[#EDE0D0] rounded-md focus:ring-1 focus:ring-[#741525]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#741525] hover:bg-[#4A1018] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right: VIP WhatsApp Concierge Banner */}
          <div className="lg:col-span-5 bg-[#FFF8EF] rounded-2xl p-6 border border-[#C69A4B]/40 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#741525] text-[#C69A4B] flex items-center justify-center">
                <LotusIcon className="w-6 h-6 text-[#C69A4B]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#741525]">
                Instant WhatsApp Video Walkthrough
              </h3>
              <p className="text-xs text-[#351D19]/80 leading-relaxed font-sans">
                Experience the magic of an in-person boutique visit from the comfort of your home. View live zari reflections, border widths, and pallu craftsmanship through high-definition video call.
              </p>
              <div className="p-3 bg-white rounded-lg border border-[#EDE0D0] text-xs text-[#351D19]/90 space-y-1">
                <p>✨ 1-on-1 Dedicated Bridal Stylist</p>
                <p>✨ Free Color Matching Advice for Blouse & Jewelry</p>
                <p>✨ Worldwide Express Shipping Support</p>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hello%20Satriva%20Sarees,%20I%20would%20like%20to%20book%20a%20video%20call%20consultation."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EDE0D0]">
          <LotusDivider
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about purchasing authentic handlooms with Satriva."
          />

          <div className="max-w-3xl mx-auto divide-y divide-[#EDE0D0] mt-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-serif text-sm sm:text-base font-semibold text-[#351D19] hover:text-[#741525] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C69A4B] transition-transform duration-200 ${
                      openFaq === idx ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="mt-2.5 text-xs sm:text-sm text-[#351D19]/80 font-sans leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
