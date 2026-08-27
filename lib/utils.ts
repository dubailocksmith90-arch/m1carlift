import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: "M1 Car Lift",
  phone: "+971 56 582 8471",
  phoneHref: "tel:+971565828471",
  whatsapp: "https://wa.me/971565828471",
  email: "booking@m1carlift.com",
  hours: "Monday–Saturday, 08:00 AM – 10:00 PM",
  rating: "5.0",
  reviewCount: 47,
  address: "Cluster I-Golden Tower - Al Wasl - Dubai",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  // Precise coordinates extracted from GMB embed
  geo: { lat: 25.20485413139283, lng: 55.268207874154065 },
  plusCode: "673C+W8 Dubai",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.95161592578!2d55.268207874154065!3d25.20485413139283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f439832968beb%3A0x4cab3f1e00f3256e!2sM1%20Car%20Lift!5e0!3m2!1sen!2sae!4v1787826717028!5m2!1sen!2sae",
  // Plus Code is the most reliable navigation link in UAE
  mapsLink: "https://maps.google.com/?q=673C%2BW8+Dubai",
  url: "https://www.m1carlift.com",
  logo: "/images/m1carlift-logo.png",
} as const;

export const ROUTES = [
  "Sharjah City Centre",
  "Al Nahda (Sharjah)",
  "Al Qasimia",
  "Muwaileh",
  "Al Taawun",
  "Al Mamzar",
  "Deira",
  "Bur Dubai",
  "Downtown Dubai",
  "Business Bay",
  "DIFC",
  "Sheikh Zayed Road",
  "Al Barsha",
  "Tecom / Internet City",
  "Media City / Studio City",
  "JLT (Jumeirah Lake Towers)",
  "JBR / Dubai Marina",
  "All SZR Metro Stations",
] as const;
