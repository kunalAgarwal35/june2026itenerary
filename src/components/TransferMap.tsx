"use client";

import { Car, MapPin, ArrowRight, Clock } from "lucide-react";
import { gmapsDirectionsEmbed, gmapsLink } from "@/lib/utils";
import type { Transfer } from "@/lib/types";

export function TransferMap({ transfer }: { transfer: Transfer }) {
  return (
    <div className="card-soft overflow-hidden">
      <div className="p-4 pb-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
            <Car size={14} />
          </div>
          <div
            className="text-[11px] uppercase tracking-[0.16em] text-muted"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Today's transfer
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium leading-tight">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-zinc-900">
              <MapPin size={13} className="text-emerald-600 shrink-0" />
              <span className="truncate">{transfer.from}</span>
            </div>
          </div>
          <ArrowRight size={14} className="text-zinc-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-zinc-900">
              <MapPin size={13} className="text-rose-600 shrink-0" />
              <span className="truncate">{transfer.to}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2 text-[11px] text-muted">
          <span className="inline-flex items-center gap-1">
            <Car size={11} /> {transfer.distanceKm} km
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={11} /> {transfer.durationHours} hr
          </span>
        </div>

        {transfer.notes && (
          <p className="text-[12px] text-zinc-600 mt-2 leading-snug">{transfer.notes}</p>
        )}
      </div>

      <div className="relative bg-zinc-100 aspect-[16/9] sm:aspect-[2/1]">
        <iframe
          src={gmapsDirectionsEmbed(transfer.from, transfer.to)}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title={`Route from ${transfer.from} to ${transfer.to}`}
        />
      </div>

      <div className="p-3 border-t border-border">
        <a
          href={gmapsLink(transfer.from, transfer.to)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-700 hover:underline inline-flex items-center gap-1"
        >
          Open route in Google Maps <ArrowRight size={11} />
        </a>
      </div>
    </div>
  );
}
