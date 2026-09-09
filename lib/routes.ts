export const PICKUP_POINTS = [
  { name: "Butina", slug: "butina" },
  { name: "Rolla", slug: "rolla" },
  { name: "Al Qasimiya", slug: "al-qasimiya" },
  { name: "Abu Shagara", slug: "abu-shagara" },
  { name: "Al Wahda", slug: "al-wahda" },
  { name: "Al Khan", slug: "al-khan" },
  { name: "Al Nahda", slug: "al-nahda" },
] as const;

export const DROPOFF_POINTS = [
  { name: "JLT", fullName: "Jumeirah Lake Towers", slug: "jlt" },
  { name: "Media City", fullName: "Dubai Media City", slug: "media-city" },
  { name: "TECOM", fullName: "TECOM", slug: "tecom" },
  { name: "Al Barsha", fullName: "Al Barsha", slug: "al-barsha" },
  { name: "Business Bay", fullName: "Business Bay", slug: "business-bay" },
  { name: "Internet City", fullName: "Dubai Internet City", slug: "internet-city" },
  { name: "JBR", fullName: "Jumeirah Beach Residence", slug: "jbr" },
  { name: "Dubai Marina", fullName: "Dubai Marina", slug: "dubai-marina" },
] as const;

export const SCHEDULE = {
  morning: ["08:00 AM", "09:00 AM", "10:00 AM"],
  evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
} as const;

export type PickupPoint = (typeof PICKUP_POINTS)[number];
export type DropoffPoint = (typeof DROPOFF_POINTS)[number];

export interface Route {
  pickup: PickupPoint;
  dropoff: DropoffPoint;
  slug: string;
}

export function getAllRoutes(): Route[] {
  const routes: Route[] = [];
  for (const pickup of PICKUP_POINTS) {
    for (const dropoff of DROPOFF_POINTS) {
      routes.push({ pickup, dropoff, slug: `${pickup.slug}-to-${dropoff.slug}` });
    }
  }
  return routes;
}

export function getRouteBySlug(slug: string): Route | null {
  return getAllRoutes().find((r) => r.slug === slug) ?? null;
}

export function buildRouteWhatsApp(pickupName: string, dropoffName: string): string {
  const text = `Hi, I'd like to book a car lift from ${pickupName}, Sharjah to ${dropoffName}, Dubai. Please confirm availability and pricing.`;
  return `https://wa.me/971565828471?text=${encodeURIComponent(text)}`;
}
