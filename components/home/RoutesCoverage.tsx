import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { PICKUP_POINTS, DROPOFF_POINTS } from "@/lib/routes";

export default function RoutesCoverage() {
  return (
    <section id="routes" aria-labelledby="routes-heading" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Coverage Map</p>
        <h2 id="routes-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4">
          Every Route Between Sharjah and Dubai
        </h2>
        <p className="text-[#8A8A95] max-w-2xl mx-auto">
          M1 Car Lift picks up from 7 Sharjah residential areas and drops off across 8 major Dubai business and residential zones — daily, Monday to Saturday.
        </p>
      </div>

      {/* Schedule strip */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-xl mx-auto">
        <div className="flex-1 bg-[#151517] border border-[#2A2A2E] rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock size={14} className="text-[#C9A227]" />
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-wider">Morning Departures</span>
          </div>
          <p className="text-[#EDEDED] text-sm font-medium">08:00 · 09:00 · 10:00 AM</p>
          <p className="text-[#8A8A95] text-xs mt-1">Sharjah → Dubai</p>
        </div>
        <div className="flex-1 bg-[#151517] border border-[#2A2A2E] rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock size={14} className="text-[#C9A227]" />
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-wider">Evening Returns</span>
          </div>
          <p className="text-[#EDEDED] text-sm font-medium">05:00 · 06:00 · 07:00 PM</p>
          <p className="text-[#8A8A95] text-xs mt-1">Dubai → Sharjah</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sharjah Pickup Points */}
        <div className="bg-[#151517] rounded-2xl p-6 border border-[#2A2A2E]">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={18} className="text-[#C9A227]" />
            <h3 className="text-[#EDEDED] font-bold text-lg">Sharjah Pick-up Points</h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {PICKUP_POINTS.map((point) => (
              <li key={point.slug}>
                <Link
                  href={`/routes?from=${point.slug}`}
                  className="flex items-center gap-2 text-sm text-[#8A8A95] hover:text-[#C9A227] transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                  {point.name}
                  <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dubai Drop-off Points */}
        <div className="bg-[#151517] rounded-2xl p-6 border border-[#2A2A2E]">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={18} className="text-[#C9A227]" />
            <h3 className="text-[#EDEDED] font-bold text-lg">Dubai Drop-off Points</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2.5">
            {DROPOFF_POINTS.map((point) => (
              <li key={point.slug}>
                <Link
                  href={`/routes?to=${point.slug}`}
                  className="flex items-center gap-2 text-sm text-[#8A8A95] hover:text-[#C9A227] transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                  {point.fullName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 text-sm">
        <Link
          href="/routes"
          className="inline-flex items-center gap-1.5 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          Browse All 56 Routes <ArrowRight size={14} />
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
