import React from "react";

interface LotusIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function LotusIcon({
  className = "w-6 h-6",
  size = 24,
  color = "currentColor",
}: LotusIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Petal */}
      <path
        d="M32 4C30 14 26 26 32 38C38 26 34 14 32 4Z"
        fill={color}
      />
      {/* Left Inner Petal */}
      <path
        d="M30 10C24 16 19 28 26 38C22 28 25 18 30 10Z"
        fill={color}
        fillOpacity="0.9"
      />
      {/* Right Inner Petal */}
      <path
        d="M34 10C40 16 45 28 38 38C42 28 39 18 34 10Z"
        fill={color}
        fillOpacity="0.9"
      />
      {/* Left Outer Petal */}
      <path
        d="M26 18C16 22 10 32 18 39C13 32 18 24 26 18Z"
        fill={color}
        fillOpacity="0.75"
      />
      {/* Right Outer Petal */}
      <path
        d="M38 18C48 22 54 32 46 39C51 32 46 24 38 18Z"
        fill={color}
        fillOpacity="0.75"
      />
      {/* Base Calyx Curve */}
      <path
        d="M18 40C24 43 40 43 46 40C42 42 22 42 18 40Z"
        fill={color}
      />
      {/* Delicate base jewel */}
      <circle cx="32" cy="42" r="1.5" fill={color} />
    </svg>
  );
}

export function LotusDivider({
  title,
  subtitle,
  centered = true,
}: {
  title?: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} my-2`}>
      <div className="flex items-center gap-3 text-[#C69A4B] mb-2">
        <span className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-[#C69A4B]" />
        <LotusIcon className="w-6 h-5 text-[#C69A4B]" />
        <span className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-[#C69A4B]" />
      </div>
      {title && (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#741525] font-semibold tracking-wide">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-[#351D19]/80 font-sans max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

