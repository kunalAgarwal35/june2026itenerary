"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Utensils,
} from "lucide-react";
import type { Plan, Day } from "@/lib/types";
import { formatDate, cn } from "@/lib/utils";
import { AttractionCard } from "./AttractionCard";
import { TransferMap } from "./TransferMap";
import { HotelCard } from "./HotelCard";

export function DayWalkthrough({ plan }: { plan: Plan }) {
  const [idx, setIdx] = useState(0);
  const day = plan.days[idx];

  const goTo = useCallback(
    (n: number) => {
      const next = Math.max(0, Math.min(plan.days.length - 1, n));
      setIdx(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [plan.days.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(idx + 1);
      if (e.key === "ArrowLeft") goTo(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, goTo]);

  return (
    <div className="flex-1 flex flex-col">
      <PlanHeader plan={plan} currentDayIndex={idx} onJump={goTo} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <DaySlide day={day} accentFrom={plan.accentFrom} />
        </motion.div>
      </AnimatePresence>

      <DayNav
        plan={plan}
        idx={idx}
        onPrev={() => goTo(idx - 1)}
        onNext={() => goTo(idx + 1)}
      />
    </div>
  );
}

function PlanHeader({
  plan,
  currentDayIndex,
  onJump,
}: {
  plan: Plan;
  currentDayIndex: number;
  onJump: (idx: number) => void;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  // Keep the current day pill in view
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const el = rail.querySelector<HTMLElement>(`[data-idx='${currentDayIndex}']`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentDayIndex]);

  return (
    <header className="px-5 sm:px-8 pt-8 sm:pt-10 max-w-3xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{plan.emoji}</span>
        <span
          className="text-[11px] uppercase tracking-[0.18em] text-muted"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {plan.name}
        </span>
      </div>
      <h1
        className="text-3xl sm:text-4xl font-medium leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        Day {currentDayIndex + 1} of {plan.days.length}
      </h1>

      <div
        ref={railRef}
        className="mt-4 -mx-5 sm:mx-0 px-5 sm:px-0 flex gap-1.5 overflow-x-auto no-scrollbar snap-x-mandatory"
      >
        {plan.days.map((d, i) => (
          <button
            key={i}
            data-idx={i}
            onClick={() => onJump(i)}
            className={cn(
              "shrink-0 snap-center flex flex-col items-center justify-center w-12 h-14 rounded-xl text-[10px] uppercase tracking-wider transition-all border",
              i === currentDayIndex
                ? "bg-zinc-900 text-white border-zinc-900 scale-105"
                : "bg-white text-zinc-700 border-border hover:border-zinc-400"
            )}
          >
            <span className="opacity-60 text-[9px]">
              {new Date(d.date + "T00:00:00").toLocaleDateString("en-IN", {
                weekday: "short",
              })}
            </span>
            <span className="text-sm font-medium">
              {new Date(d.date + "T00:00:00").getDate()}
            </span>
          </button>
        ))}
      </div>
    </header>
  );
}

function DaySlide({ day, accentFrom }: { day: Day; accentFrom: string }) {
  return (
    <div className="max-w-3xl mx-auto w-full px-5 sm:px-8 mt-5">
      {/* Hero card */}
      <div className="postcard relative h-[260px] sm:h-[340px]">
        <Image
          src={day.heroImage}
          alt={day.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute top-4 left-4 z-10">
          <div
            className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 inline-flex items-center gap-2 stamp"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            <span className="text-[10px] text-muted">{formatDate(day.date)}</span>
            <span
              className="text-[10px] font-medium"
              style={{ color: accentFrom }}
            >
              · Day {day.index}
            </span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-white">
          <div className="text-[11px] uppercase tracking-[0.16em] opacity-80 mb-1">
            {day.city}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-medium leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {day.title}
          </h2>
        </div>
      </div>

      <p className="text-[14.5px] sm:text-base text-zinc-700 leading-relaxed mt-4 mb-5">
        {day.summary}
      </p>

      {day.warning && (
        <div className="card-soft p-3.5 mb-4 flex gap-2.5 bg-amber-50/60 !border-amber-200">
          <AlertTriangle
            size={16}
            className="text-amber-600 shrink-0 mt-0.5"
          />
          <p className="text-[13px] leading-snug text-amber-900">{day.warning}</p>
        </div>
      )}

      {day.transfer && (
        <div className="mb-5">
          <TransferMap transfer={day.transfer} />
        </div>
      )}

      <section className="mb-5">
        <SectionTitle small="Attractions" big={`${day.attractions.length} stops`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {day.attractions.map((a, i) => (
            <AttractionCard key={i} attraction={a} />
          ))}
        </div>
      </section>

      {day.hotel && (
        <section className="mb-5">
          <HotelCard hotel={day.hotel} />
        </section>
      )}

      {day.meals && (
        <div className="card-soft p-4 mb-5">
          <div className="flex items-start gap-2.5">
            <Utensils size={14} className="text-zinc-700 mt-0.5 shrink-0" />
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.16em] text-muted"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Meals
              </div>
              <p className="text-sm text-zinc-700 mt-0.5 leading-snug">{day.meals}</p>
            </div>
          </div>
        </div>
      )}

      <div className="h-8" />
    </div>
  );
}

function SectionTitle({ small, big }: { small: string; big: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <h3
        className="text-lg font-medium tracking-tight"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {small}
      </h3>
      <span
        className="text-[11px] uppercase tracking-[0.16em] text-muted"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {big}
      </span>
    </div>
  );
}

function DayNav({
  plan,
  idx,
  onPrev,
  onNext,
}: {
  plan: Plan;
  idx: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = idx > 0;
  const hasNext = idx < plan.days.length - 1;
  return (
    <div className="max-w-3xl mx-auto w-full px-5 sm:px-8 pb-4 grid grid-cols-2 gap-3">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={cn(
          "card-soft !p-4 flex items-center gap-2 text-left transition-opacity",
          !hasPrev && "opacity-30 cursor-not-allowed"
        )}
      >
        <ChevronLeft size={18} className="text-zinc-700 shrink-0" />
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-muted">Prev</div>
          <div className="text-sm font-medium truncate">
            {hasPrev ? plan.days[idx - 1].city : "Start"}
          </div>
        </div>
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={cn(
          "card-soft !p-4 flex items-center gap-2 text-right justify-end transition-opacity",
          !hasNext && "opacity-30 cursor-not-allowed"
        )}
      >
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-muted">Next</div>
          <div className="text-sm font-medium truncate">
            {hasNext ? plan.days[idx + 1].city : "Trip ends"}
          </div>
        </div>
        <ChevronRight size={18} className="text-zinc-700 shrink-0" />
      </button>
    </div>
  );
}
