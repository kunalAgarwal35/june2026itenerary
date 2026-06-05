import { sikkim } from "./sikkim";
import { kerala } from "./kerala";
import { himachal } from "./himachal";
import { rishikesh } from "./rishikesh";
import { kinnaur } from "./kinnaur";
import { lahaul } from "./lahaul";
import type { Plan } from "../types";

export const plans: Record<string, Plan> = {
  sikkim,
  kerala,
  himachal,
  rishikesh,
  kinnaur,
  lahaul,
};

// Primary list shown on the home page.
// Lahaul is THE final plan — it leads. Kerala & Palampur (himachal) stay as the
// warm-weather backups. Kinnaur, Sikkim & Rishikesh remain in the repo as
// inactive alternatives reachable by URL.
export const planList: Plan[] = [lahaul, kerala, himachal];

export function getPlan(slug: string): Plan | undefined {
  return plans[slug];
}
