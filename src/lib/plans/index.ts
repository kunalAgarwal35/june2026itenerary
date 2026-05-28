import { sikkim } from "./sikkim";
import { kerala } from "./kerala";
import { himachal } from "./himachal";
import { rishikesh } from "./rishikesh";
import { kinnaur } from "./kinnaur";
import type { Plan } from "../types";

export const plans: Record<string, Plan> = {
  sikkim,
  kerala,
  himachal,
  rishikesh,
  kinnaur,
};

// Primary list shown on the home page.
// Kinnaur replaces Rishikesh per user's "convert to slow Himachal" ask;
// Sikkim & Rishikesh stay in the repo as inactive alternatives.
export const planList: Plan[] = [kerala, himachal, kinnaur];

export function getPlan(slug: string): Plan | undefined {
  return plans[slug];
}
