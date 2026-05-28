export type Attraction = {
  name: string;
  brief: string;
  photo: string;
  duration?: string;
  elderlyFriendly?: boolean;
  permitRequired?: boolean;
  mapsQuery?: string;
};

export type Transfer = {
  from: string;
  to: string;
  distanceKm: number;
  durationHours: number;
  notes?: string;
};

export type Hotel = {
  name: string;
  category: string;
  pricePerNight: number;
  roomsNeeded: number;
  notes?: string;
  bookingUrl?: string;
  photo?: string;
};

export type Day = {
  index: number;
  date: string;
  title: string;
  city: string;
  summary: string;
  heroImage: string;
  transfer?: Transfer;
  attractions: Attraction[];
  hotel?: Hotel;
  meals?: string;
  warning?: string;
};

export type Flight = {
  airline: string;
  flightNo?: string;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  duration: string;
  stops: string;
  pricePerPerson: number;
};

export type CarOption = {
  type: "self-drive" | "chauffeur";
  vehicle: string;
  capacity: number;
  perDayPrice: number;
  totalDays: number;
  countNeeded: number;
  vendor: string;
  notes: string;
};

export type WeatherNote = {
  heading: string;
  body: string;
  tone: "good" | "warn" | "bad" | "info";
};

export type Plan = {
  slug: "sikkim" | "kerala" | "himachal" | "rishikesh" | "kinnaur";
  name: string;
  tagline: string;
  startDate: string;
  endDate: string;
  travellers: number;
  heroImage: string;
  accentFrom: string;
  accentTo: string;
  emoji: string;
  description: string;
  flights: { outbound: Flight[]; return: Flight[] };
  carOptions: CarOption[];
  weather: WeatherNote[];
  totalEstimate: { low: number; high: number };
  days: Day[];
  costBreakdown: { label: string; amount: number; note?: string }[];
};
