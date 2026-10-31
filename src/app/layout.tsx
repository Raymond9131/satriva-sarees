import type { Metadata } from "next";
import { Poppins, Great_Vibes } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { CartWishlistProvider } from "@/context/CartWishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satriva Sarees | Luxury Handcrafted Sarees & Indian Ethnic Wear",
  description:
    "Discover the beauty of Indian elegance with Satriva Sarees. Handcrafted silk sarees, wedding sarees, party wear, and designer sarees crafted for grace in every drape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${greatVibes.variable} antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F8F1E8] text-[#351D19] font-sans selection:bg-[#741525] selection:text-white"
      >
        <CartWishlistProvider>
          <Suspense fallback={<div className="h-20 bg-white" />}>
            <Header />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartWishlistProvider>
      </body>
    </html>
  );
}
