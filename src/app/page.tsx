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
          Lahaul it is.
          <br />
          <span className="italic text-muted">One high-mountain</span> week.
        </h1>
        <p className="text-base sm:text-lg text-muted max-w-xl leading-snug">
          For 11 of us — two families, four parents, June 7 to 13. The plan is set: Dobhi, Jispa, a run at Shinku La, then Manali. Kerala and Palampur stay as the warm-weather backups. Tap a card to walk through it day-by-day.
        </p>
      </header>

      {/* Plans grid */}
      <main className="px-5 sm:px-8 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="col-span-1" />
            {planList.map((p) => (
              <div key={p.slug} className="col-span-1">
                <div className="flex items-center gap-1 font-medium text-foreground">
                  <span>{p.emoji}</span>
                  <span className="truncate text-[11px] sm:text-sm">
                    {labelFor(p.slug)}
                  </span>
                </div>
              </div>
            ))}

            <Row label="Length" values={["7 days", "9 days", "7 days"]} />
            <Row label="Travel" values={["Drive from JAI", "Fly + drive", "Drive from JAI"]} />
            <Row label="Bases" values={["Dobhi · Jispa · Manali 2N", "6 stops", "1 resort (4N)"]} />
            <Row label="Highest point" values={["Shinku La 16,700ft", "Munnar 5,800ft", "Palampur 4,300ft"]} />
            <Row label="Longest drive" values={["~10 hr · Shinku La day", "4 hr", "8.5 hr highway"]} />
            <Row label="Altitude" values={["High — AMS risk", "Sea level", "Low hills"]} />
            <Row label="For elders" values={["⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]} />
            <Row label="Vibe" values={["Atal Tunnel · high passes", "Houseboat + beach", "Tea estate spa"]} />
            <Row label="Budget" values={["₹3.0-3.9L", "₹5.3-7.6L", "₹5.0-6.1L"]} />
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
      <div className="col-span-1 text-muted text-[11px] sm:text-sm py-1.5 border-t border-border">
        {label}
      </div>
      {values.map((v, i) => (
        <div
          key={i}
          className="col-span-1 text-[11px] sm:text-sm py-1.5 border-t border-border font-medium"
        >
          {v}
        </div>
      ))}
    </>
  );
}

function labelFor(slug: string) {
  switch (slug) {
    case "sikkim":
      return "Sikkim";
    case "kerala":
      return "Kerala";
    case "himachal":
      return "Palampur";
    case "rishikesh":
      return "Rishikesh";
    case "kinnaur":
      return "Kinnaur";
    case "lahaul":
      return "Lahaul";
    default:
      return slug;
  }
}
