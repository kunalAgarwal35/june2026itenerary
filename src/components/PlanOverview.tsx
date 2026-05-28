"use client";

import {
  Plane,
  Car,
  CloudRain,
  IndianRupee,
  ArrowRight,
  Sun,
  CloudSun,
  CloudLightning,
  Info,
  Check,
  Users,
} from "lucide-react";
import type { Plan, WeatherNote } from "@/lib/types";
import { formatINR } from "@/lib/utils";

export function PlanOverview({ plan }: { plan: Plan }) {
  return (
    <div className="max-w-3xl mx-auto w-full px-5 sm:px-8 pt-8 sm:pt-10">
      <header className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{plan.emoji}</span>
          <span
            className="text-[11px] uppercase tracking-[0.18em] text-muted"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {plan.name} · Logistics
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Flights, cars & budget
        </h1>
        <p className="text-sm text-zinc-600 mt-2 leading-snug max-w-prose">
          {plan.description}
        </p>
      </header>

      {/* Flights */}
      <Section icon={<Plane size={14} />} label="Flights">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FlightCard
            title="Outbound · June 7"
            flights={plan.flights.outbound}
          />
          <FlightCard
            title="Return · June 15"
            flights={plan.flights.return}
          />
        </div>
      </Section>

      {/* Car options */}
      <Section icon={<Car size={14} />} label="Ground transport (pick one)">
        <div className="space-y-3">
          {plan.carOptions.map((opt, i) => (
            <div key={i} className="card-soft p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 text-white ${
                    opt.type === "chauffeur" ? "bg-emerald-600" : "bg-zinc-900"
                  }`}
                >
                  <Car size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <h4
                      className="text-base font-medium leading-tight tracking-tight"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {opt.vehicle}
                    </h4>
                    <div className="text-sm font-semibold tabular-nums">
                      {formatINR(opt.perDayPrice * opt.totalDays * opt.countNeeded)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Users size={11} /> {opt.capacity * opt.countNeeded} seats
                    </span>
                    <span>·</span>
                    <span>
                      {formatINR(opt.perDayPrice)} × {opt.totalDays} days × {opt.countNeeded}
                    </span>
                    <span>·</span>
                    <span
                      className={
                        opt.type === "chauffeur"
                          ? "text-emerald-700 font-medium"
                          : "text-zinc-700 font-medium"
                      }
                    >
                      {opt.type === "chauffeur" ? "With driver" : "Self-drive"}
                    </span>
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">via {opt.vendor}</div>
                  <p className="text-[12.5px] text-zinc-700 mt-2 leading-snug">
                    {opt.notes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Weather honest call */}
      <Section icon={<CloudRain size={14} />} label="June weather — what to expect">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {plan.weather.map((w, i) => (
            <WeatherCard key={i} note={w} />
          ))}
        </div>
      </Section>

      {/* Budget */}
      <Section icon={<IndianRupee size={14} />} label="Budget breakdown">
        <div className="card-soft overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted">
                  Total estimate · 11 pax · 8 nights
                </div>
                <div
                  className="text-2xl font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {formatINR(plan.totalEstimate.low)} –{" "}
                  {formatINR(plan.totalEstimate.high)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-muted">
                  Per person
                </div>
                <div className="text-base font-medium">
                  ~{formatINR(plan.totalEstimate.low / plan.travellers)}
                </div>
              </div>
            </div>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {plan.costBreakdown.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="p-3 align-top">
                    <div className="font-medium text-zinc-900">{item.label}</div>
                    {item.note && (
                      <div className="text-[11px] text-muted mt-0.5">{item.note}</div>
                    )}
                  </td>
                  <td className="p-3 align-top text-right font-medium tabular-nums whitespace-nowrap">
                    {formatINR(item.amount)}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-zinc-900">
                <td className="p-3 font-medium">Subtotal</td>
                <td className="p-3 text-right font-semibold tabular-nums">
                  {formatINR(
                    plan.costBreakdown.reduce((a, b) => a + b.amount, 0)
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <div className="h-8" />
    </div>
  );
}

function Section({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-7">
      <div
        className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-muted mb-3"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {icon}
        {label}
      </div>
      {children}
    </section>
  );
}

function FlightCard({
  title,
  flights,
}: {
  title: string;
  flights: Plan["flights"]["outbound"];
}) {
  return (
    <div className="card-soft p-4">
      <div className="text-[11px] uppercase tracking-wider text-muted mb-2">
        {title}
      </div>
      <div className="space-y-2.5">
        {flights.map((f, i) => (
          <div
            key={i}
            className={
              "rounded-xl p-3 " +
              (i === 0 ? "bg-emerald-50/50 border border-emerald-100" : "bg-zinc-50")
            }
          >
            <div className="flex items-center gap-2 text-[11px] mb-1.5">
              <span className="font-semibold text-zinc-900">{f.airline}</span>
              {f.flightNo && (
                <span
                  className="text-muted"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {f.flightNo}
                </span>
              )}
              {i === 0 && (
                <span className="ml-auto inline-flex items-center gap-0.5 text-emerald-700 text-[10px] font-medium">
                  <Check size={10} /> Pick
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="font-medium tabular-nums">{f.depart}</div>
              <span className="text-zinc-400 text-xs">{f.from.replace(/\s.*$/, "")}</span>
              <ArrowRight size={12} className="text-zinc-400" />
              <div className="font-medium tabular-nums">{f.arrive}</div>
              <span className="text-zinc-400 text-xs">{f.to.replace(/\s.*$/, "")}</span>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <div className="text-[11px] text-muted">
                {f.duration} · {f.stops}
              </div>
              <div className="text-sm font-semibold tabular-nums">
                {formatINR(f.pricePerPerson)}
                <span className="text-[10px] font-normal text-muted">/pax</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeatherCard({ note }: { note: WeatherNote }) {
  const palette = {
    good: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", icon: <Sun size={14} className="text-emerald-700" /> },
    warn: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", icon: <CloudSun size={14} className="text-amber-700" /> },
    bad: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-900", icon: <CloudLightning size={14} className="text-rose-700" /> },
    info: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", icon: <Info size={14} className="text-blue-700" /> },
  }[note.tone];

  return (
    <div className={`card-soft !p-4 ${palette.bg} ${palette.border}`}>
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 shrink-0">{palette.icon}</div>
        <div>
          <h4 className={`text-sm font-medium tracking-tight ${palette.text}`}>
            {note.heading}
          </h4>
          <p className={`text-[12.5px] mt-1 leading-snug ${palette.text} opacity-90`}>
            {note.body}
          </p>
        </div>
      </div>
    </div>
  );
}
