"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar } from "lucide-react";
import type { Plan } from "@/lib/types";
import { formatINR, shortDate } from "@/lib/utils";

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/plan/${plan.slug}`}
        className="block postcard h-[440px] sm:h-[480px] group relative"
        style={{
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.5) inset, 0 8px 32px -8px rgba(20,20,18,0.18)",
        }}
      >
        <Image
          src={plan.heroImage}
          alt={plan.name}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Plan badge — top-left */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <div
            className="px-3 py-1.5 rounded-full backdrop-blur-md bg-white/90 stamp text-[10px] font-medium text-zinc-800"
          >
            Plan {index + 1}
          </div>
          <div className="text-2xl">{plan.emoji}</div>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
          <div
            className="text-[11px] font-medium uppercase tracking-[0.18em] opacity-80 mb-1"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {shortDate(plan.startDate)} → {shortDate(plan.endDate)}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-medium leading-[1.05] mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {plan.name}
          </h2>
          <p className="text-sm text-white/90 mb-4 max-w-md leading-snug">
            {plan.tagline}
          </p>

          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              <Users size={12} />
              {plan.travellers} pax
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              <Calendar size={12} />
              {plan.days.length} days
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              ~{formatINR(plan.totalEstimate.low)}
            </span>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
            View the plan
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </div>
        </div>

        {/* Tape decoration */}
        <div
          className="tape top-3 right-8 w-14 h-5 -rotate-6 z-20"
          aria-hidden
        />
      </Link>
    </motion.div>
  );
}
