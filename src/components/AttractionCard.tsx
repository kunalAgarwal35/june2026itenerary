"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock, Users, FileBadge, MapPin } from "lucide-react";
import type { Attraction } from "@/lib/types";

const fallbackImg =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect fill='%23eae8e1' width='400' height='300'/><text x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%236b6a64' text-anchor='middle' dy='.3em'>Photo</text></svg>";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  const [src, setSrc] = useState(attraction.photo);

  return (
    <div className="card-soft overflow-hidden">
      <div className="relative h-40 sm:h-44 bg-zinc-100">
        <Image
          src={src}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          unoptimized
          onError={() => setSrc(fallbackImg)}
        />
        {attraction.permitRequired && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-medium uppercase tracking-wider flex items-center gap-1">
            <FileBadge size={10} /> Permit
          </div>
        )}
      </div>
      <div className="p-4">
        <h4
          className="text-lg font-medium tracking-tight leading-tight mb-1.5"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {attraction.name}
        </h4>
        <p className="text-[13.5px] text-zinc-700 leading-snug mb-3">
          {attraction.brief}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          {attraction.duration && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700">
              <Clock size={10} /> {attraction.duration}
            </span>
          )}
          {attraction.elderlyFriendly && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              <Users size={10} /> Elder-friendly
            </span>
          )}
          {attraction.mapsQuery && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                attraction.mapsQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <MapPin size={10} /> Map
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
