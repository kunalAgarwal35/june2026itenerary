import { notFound } from "next/navigation";
import { getPlan } from "@/lib/plans";
import { PlanOverview } from "@/components/PlanOverview";

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);
  if (!plan) notFound();

  return <PlanOverview plan={plan} />;
}
