import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/utils";

const sharjahZones = [
  "Sharjah City Centre",
  "Al Nahda (Sharjah)",
  "Al Qasimia",
  "Muwaileh",
  "Al Taawun",
];

const dubaiZones = [
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
];

export default function RoutesCoverage() {
  return (
    <section id="routes" aria-labelledby="routes-heading" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Coverage Map</p>
        <h2 id="routes-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4">
          Every Route Between Sharjah and Dubai
        </h2>
        <p className="text-[#8A8A95] max-w-2xl mx-auto">
          M1 Car Lift picks up from major Sharjah residential and commercial areas and drops off across Dubai — from Deira to Dubai Marina.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sharjah Side */}
        <div className="bg-[#151517] rounded-2xl p-6 border border-[#2A2A2E]">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={18} className="text-[#C9A227]" />
            <h3 className="text-[#EDEDED] font-bold text-lg">Sharjah Pick-up Zones</h3>
          </div>
          <ul className="flex flex-col gap-2">
            {sharjahZones.map((zone) => (
              <li key={zone} className="flex items-center gap-2 text-sm text-[#8A8A95]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                {zone}
              </li>
            ))}
          </ul>
        </div>

        {/* Dubai Side */}
        <div className="bg-[#151517] rounded-2xl p-6 border border-[#2A2A2E]">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={18} className="text-[#C9A227]" />
            <h3 className="text-[#EDEDED] font-bold text-lg">Dubai Drop-off Zones</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {dubaiZones.map((zone) => (
              <li key={zone} className="flex items-center gap-2 text-sm text-[#8A8A95]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                {zone}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 text-sm">
        <Link
          href="/services#routes"
          className="inline-flex items-center gap-1.5 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          View All Service Routes →
        </Link>
        <span className="text-[#8A8A95]">
          Don&apos;t see your area?{" "}
          <Link href="/contact" className="text-[#C9A227] hover:underline">
            Contact us
          </Link>{" "}
          — we accommodate custom routes.
        </span>
      </div>
    </section>
  );
}
