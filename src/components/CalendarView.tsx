"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Camera, BedDouble, AlertTriangle } from "lucide-react";
import type { Plan } from "@/lib/types";
import { formatINR } from "@/lib/utils";

export function CalendarView({ plan }: { plan: Plan }) {
  const monthDays = buildJuneGrid(plan);

  return (
    <div className="max-w-3xl mx-auto w-full px-5 sm:px-8 pt-8 sm:pt-10">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{plan.emoji}</span>
          <span
            className="text-[11px] uppercase tracking-[0.18em] text-muted"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {plan.name} · Calendar
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          June 2026
        </h1>
      </div>

      {/* Mini month-grid */}
      <div className="card-soft p-3 sm:p-4 mb-6">
        <div
          className="grid grid-cols-7 gap-1 text-[10px] uppercase tracking-wider text-muted mb-2"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-center">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {monthDays.map((cell, i) => (
            <Link
              key={i}
              href={cell.dayIdx != null ? `/plan/${plan.slug}` : "#"}
              className={`
                relative aspect-square rounded-md flex flex-col items-center justify-center text-[11px]
                ${cell.dayIdx != null
                  ? "bg-zinc-900 text-white font-medium hover:scale-105"
                  : cell.empty
                  ? "bg-transparent text-transparent"
                  : "bg-zinc-50 text-zinc-400"}
                transition-transform
              `}
            >
              {cell.empty ? "" : cell.dateNum}
              {cell.dayIdx != null && (
                <span className="text-[8px] opacity-70">D{cell.dayIdx + 1}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Vertical timeline */}
      <div
        className="text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        Day-by-day timeline
      </div>

      <ol className="relative border-l-2 border-dashed border-zinc-300 ml-3 space-y-4">
        {plan.days.map((day, i) => {
          const d = new Date(day.date + "T00:00:00");
          const isHotelChange =
            i > 0 && plan.days[i - 1].hotel?.name !== day.hotel?.name;
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="pl-6 relative"
            >
              <div
                className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-4 border-background"
                style={{ background: plan.accentFrom }}
              />
              <Link href={`/plan/${plan.slug}`} className="block group">
                <div className="card-soft overflow-hidden">
                  <div className="flex">
                    <div
                      className="w-20 sm:w-24 shrink-0 p-3 flex flex-col items-center justify-center text-white"
                      style={{
                        background: `linear-gradient(180deg, ${plan.accentFrom}, ${plan.accentTo})`,
                      }}
                    >
                      <div className="text-[10px] uppercase tracking-wider opacity-80">
                        {d.toLocaleDateString("en-IN", { weekday: "short" })}
                      </div>
                      <div
                        className="text-2xl font-semibold"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                      >
                        {d.getDate()}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider opacity-80">
                        Jun
                      </div>
                    </div>
                    <div className="flex-1 p-3 min-w-0">
                      <div className="flex items-center gap-1 text-[10px] text-muted mb-0.5">
                        <span className="font-medium uppercase tracking-wider">
                          Day {day.index}
                        </span>
                        <span>·</span>
                        <MapPin size={10} />
                        <span>{day.city}</span>
                      </div>
                      <h4
                        className="text-[15px] font-medium leading-tight tracking-tight group-hover:underline"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                      >
                        {day.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-1.5 text-[11px] text-zinc-600">
                        <span className="inline-flex items-center gap-1">
                          <Camera size={10} /> {day.attractions.length}
                        </span>
                        {day.hotel && (
                          <span className="inline-flex items-center gap-1">
                            <BedDouble size={10} />{" "}
                            {isHotelChange || i === 0 ? "Check-in" : "Stay"}
                          </span>
                        )}
                        {day.warning && (
                          <span className="inline-flex items-center gap-1 text-amber-700">
                            <AlertTriangle size={10} /> Note
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="relative w-20 sm:w-28 shrink-0">
                      <Image
                        src={day.heroImage}
                        alt={day.title}
                        fill
                        sizes="120px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ol>

      {/* Summary panel */}
      <div className="card-soft p-4 mt-6">
        <div
          className="text-[11px] uppercase tracking-[0.18em] text-muted mb-2"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          At a glance
        </div>
        <div className="grid grid-cols-2 gap-3 text-[13px]">
          <Stat label="Travellers" value={`${plan.travellers}`} />
          <Stat label="Days / Nights" value={`${plan.days.length} / ${plan.days.length - 1}`} />
          <Stat label="Cities" value={`${countCities(plan)}`} />
          <Stat
            label="Estimate"
            value={`${formatINR(plan.totalEstimate.low / 100000)}L–${formatINR(
              plan.totalEstimate.high / 100000
            )}L`}
          />
        </div>
      </div>

      <div className="h-8" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted">{label}</div>
      <div
        className="text-base font-medium"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {value}
      </div>
    </div>
  );
}

function countCities(plan: Plan) {
  const set = new Set(plan.days.map((d) => d.city));
  return set.size;
}

function buildJuneGrid(plan: Plan) {
  // June 2026: June 1 is a Monday
  const firstDay = new Date("2026-06-01T00:00:00");
  const firstWeekday = firstDay.getDay(); // 0=Sun, 1=Mon
  const cells: {
    dateNum?: number;
    dayIdx?: number;
    empty: boolean;
  }[] = [];

  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ empty: true });
  }

  const daysInJune = 30;
  for (let d = 1; d <= daysInJune; d++) {
    const iso = `2026-06-${String(d).padStart(2, "0")}`;
    const tripIdx = plan.days.findIndex((day) => day.date === iso);
    cells.push({
      dateNum: d,
      dayIdx: tripIdx >= 0 ? tripIdx : undefined,
      empty: false,
    });
  }

  // pad to multiple of 7
  while (cells.length % 7 !== 0) cells.push({ empty: true });

  return cells;
}
