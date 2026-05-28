import { sikkim } from "./sikkim";
import { kerala } from "./kerala";
import { himachal } from "./himachal";
import type { Plan } from "../types";

export const plans: Record<string, Plan> = {
  sikkim,
  kerala,
  himachal,
};

export const planList: Plan[] = [kerala, himachal, sikkim];

export function getPlan(slug: string): Plan | undefined {
  return plans[slug];
}
