import Link from "next/link";
import { planList } from "@/lib/plans";
import { PlanCard } from "@/components/PlanCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="pt-12 sm:pt-20 pb-6 px-5 sm:px-8 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-muted"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            June 2026 · Family Trip
          </span>
        </div>
        <h1
          className="text-[2.5rem] sm:text-6xl leading-[0.95] tracking-tight font-medium mb-3"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Two plans.
          <br />
          <span className="italic text-muted">One unforgettable</span> week.
        </h1>
        <p className="text-base sm:text-lg text-muted max-w-xl leading-snug">
          For 11 of us — two families, four parents, June 7 to 15. Tap a card to walk through day-by-day, or compare side-by-side first.
        </p>
      </header>

      {/* Plans grid */}
      <main className="px-5 sm:px-8 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {planList.map((plan, i) => (
            <PlanCard key={plan.slug} plan={plan} index={i} />
          ))}
        </div>

        {/* Comparison strip */}
        <section className="mt-8 sm:mt-12 card-soft p-5 sm:p-6">
          <h3
            className="text-xs uppercase tracking-[0.18em] text-muted mb-4"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Quick compare
          </h3>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="col-span-1" />
            {planList.map((p) => (
              <div key={p.slug} className="col-span-1">
                <div className="flex items-center gap-1.5 font-medium text-foreground">
                  <span>{p.emoji}</span>
                  <span className="truncate">{p.slug === "sikkim" ? "Sikkim" : "Kerala"}</span>
                </div>
              </div>
            ))}

            <Row label="Climate (June 7-15)" values={["Pre-monsoon", "Monsoon onset"]} />
            <Row label="Daytime temp" values={["18-24°C", "22-30°C"]} />
            <Row label="Self-drive viable?" values={["Mostly no", "Yes"]} />
            <Row label="Wow factor" values={["Kanchenjunga", "Backwaters"]} />
            <Row label="Best for elders" values={["⭐⭐⭐", "⭐⭐⭐⭐"]} />
            <Row label="Budget range" values={["₹9.2-12.2L", "₹5.8-8.5L"]} />
          </div>
        </section>

        <div className="h-16" />
      </main>

      <footer className="mt-auto px-5 sm:px-8 py-8 max-w-5xl mx-auto w-full text-xs text-muted">
        <div
          style={{ fontFamily: "var(--font-geist-mono)" }}
          className="uppercase tracking-[0.16em]"
        >
          Made for the trip · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <>
      <div className="col-span-1 text-muted text-xs sm:text-sm py-1.5 border-t border-border">
        {label}
      </div>
      {values.map((v, i) => (
        <div
          key={i}
          className="col-span-1 text-xs sm:text-sm py-1.5 border-t border-border font-medium"
        >
          {v}
        </div>
      ))}
    </>
  );
}
