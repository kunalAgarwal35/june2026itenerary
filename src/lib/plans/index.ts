import { sikkim } from "./sikkim";
import { kerala } from "./kerala";
import type { Plan } from "../types";

export const plans: Record<string, Plan> = {
  sikkim,
  kerala,
};

export const planList: Plan[] = [sikkim, kerala];

export function getPlan(slug: string): Plan | undefined {
  return plans[slug];
}
