import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CollectionCardProps {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export default function CollectionCard({
  name,
  image,
}: CollectionCardProps) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(name)}`}
      className="group block relative w-full aspect-[375/595] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
    >
      <Image
        src={image}
        alt={`${name} - Satriva Sarees Luxury Collection`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        quality={95}
      />
    </Link>
  );
}
