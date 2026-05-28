import { BedDouble, Star, Sparkles } from "lucide-react";
import type { Hotel } from "@/lib/types";
import { formatINR } from "@/lib/utils";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="card-soft p-4">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
          <BedDouble size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-[11px] uppercase tracking-[0.16em] text-muted mb-1"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Tonight's stay
          </div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h4
              className="text-lg font-medium leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {hotel.name}
            </h4>
          </div>
          <div className="flex items-center gap-3 mt-1 text-xs text-zinc-600">
            <span className="inline-flex items-center gap-1">
              <Star size={11} className="fill-amber-400 stroke-amber-500" />
              {hotel.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Sparkles size={11} />
              {hotel.roomsNeeded} rooms
            </span>
          </div>
          {hotel.notes && (
            <p className="text-[12.5px] text-zinc-700 mt-2 leading-snug">{hotel.notes}</p>
          )}
        </div>
        <div className="text-right shrink-0">
          <div className="text-[10px] uppercase tracking-wider text-muted">/night</div>
          <div className="text-base font-semibold">{formatINR(hotel.pricePerNight)}</div>
        </div>
      </div>
    </div>
  );
}
