import { sikkim } from "./sikkim";
import { kerala } from "./kerala";
import { himachal } from "./himachal";
import { rishikesh } from "./rishikesh";
import type { Plan } from "../types";

export const plans: Record<string, Plan> = {
  sikkim,
  kerala,
  himachal,
  rishikesh,
};

// Primary list shown on the home page — Sikkim removed per user preference.
export const planList: Plan[] = [kerala, himachal, rishikesh];

export function getPlan(slug: string): Plan | undefined {
  return plans[slug];
}
