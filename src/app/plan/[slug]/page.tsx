import { notFound } from "next/navigation";
import { getPlan } from "@/lib/plans";
import { DayWalkthrough } from "@/components/DayWalkthrough";

export default async function PlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);
  if (!plan) notFound();

  return <DayWalkthrough plan={plan} />;
}
