import { notFound } from "next/navigation";
import { getPlan } from "@/lib/plans";
import { CalendarView } from "@/components/CalendarView";

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);
  if (!plan) notFound();

  return <CalendarView plan={plan} />;
}
