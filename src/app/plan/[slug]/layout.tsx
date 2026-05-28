import { notFound } from "next/navigation";
import { getPlan } from "@/lib/plans";
import { BottomNav } from "@/components/BottomNav";

export default async function PlanLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);
  if (!plan) notFound();

  return (
    <div
      className="min-h-screen flex flex-col pb-24"
      style={{
        background: `linear-gradient(180deg, ${plan.accentFrom}08 0%, transparent 280px), var(--background)`,
      }}
    >
      {children}
      <BottomNav slug={slug} />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "sikkim" },
    { slug: "kerala" },
    { slug: "himachal" },
    { slug: "rishikesh" },
  ];
}
