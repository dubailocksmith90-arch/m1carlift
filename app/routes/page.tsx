import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import WaIcon from "@/components/ui/WaIcon";
import { BUSINESS } from "@/lib/utils";
import {
  PICKUP_POINTS,
  DROPOFF_POINTS,
  SCHEDULE,
  getAllRoutes,
  buildRouteWhatsApp,
} from "@/lib/routes";

export const metadata: Metadata = {
  title: "Car Lift Routes: Sharjah to Dubai",
  description:
    "Browse all M1 Car Lift routes from Sharjah (Butina, Rolla, Al Qasimiya, Abu Shagara, Al Wahda, Al Khan, Al Nahda) to Dubai (JLT, Media City, TECOM, Al Barsha, Business Bay, Internet City, JBR, Dubai Marina). Morning & evening slots Mon–Sat.",
  alternates: { canonical: "/routes" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: `${BUSINESS.url}/routes`,
    siteName: BUSINESS.name,
    title: "Car Lift Routes: Sharjah to Dubai | M1 Car Lift",
    description:
      "All 56 daily car lift routes from 7 Sharjah pickup points to 8 Dubai destinations. Morning & evening slots Monday to Saturday.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M1 Car Lift Routes — Sharjah to Dubai",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BUSINESS.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Car Lift Routes",
      item: `${BUSINESS.url}/routes`,
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  areaServed: ["Sharjah", "Dubai"],
  serviceType: "Car Lift / Private Transport",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
};

export default function RoutesPage() {
  const allRoutes = getAllRoutes();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        aria-labelledby="routes-heading"
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex justify-center items-center gap-2 text-sm text-[#8A8A95]">
              <li>
                <Link href="/" className="hover:text-[#C9A227] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#2A2A2E]">
                /
              </li>
              <li className="text-[#C9A227] font-medium">Routes</li>
            </ol>
          </nav>

          <h1
            id="routes-heading"
            className="text-4xl sm:text-5xl font-bold text-[#EDEDED] leading-tight tracking-tight mb-6"
          >
            Car Lift Routes:{" "}
            <span className="text-[#C9A227]">Sharjah to Dubai</span>
          </h1>

          <p className="text-[#8A8A95] text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            M1 Car Lift operates daily car lift services Monday to Saturday from seven Sharjah
            pickup points — Butina, Rolla, Al Qasimiya, Abu Shagara, Al Wahda, Al Khan, and
            Al Nahda — directly to eight major Dubai destinations. Our drop-off coverage spans
            JLT, Media City, TECOM, Al Barsha, Business Bay, Internet City, JBR, and Dubai
            Marina, putting you within easy reach of the city&apos;s top business and residential
            hubs. With six scheduled slots each day across morning and evening windows, we make
            the Sharjah–Dubai commute simple, affordable, and stress-free.
          </p>

          {/* Schedule strip */}
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
            {/* Morning */}
            <div className="bg-[#151517] border border-[#2A2A2E] rounded-xl p-5 text-left">
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-3">
                Morning Slots
              </p>
              <div className="flex flex-col gap-2">
                {SCHEDULE.morning.map((time) => (
                  <div
                    key={time}
                    className="flex items-center gap-3 text-[#EDEDED] font-medium text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0" />
                    {time}
                  </div>
                ))}
              </div>
            </div>
            {/* Evening */}
            <div className="bg-[#151517] border border-[#2A2A2E] rounded-xl p-5 text-left">
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-3">
                Evening Slots
              </p>
              <div className="flex flex-col gap-2">
                {SCHEDULE.evening.map((time) => (
                  <div
                    key={time}
                    className="flex items-center gap-3 text-[#EDEDED] font-medium text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0" />
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-[#8A8A95] text-sm">
            Monday – Saturday &nbsp;·&nbsp; 6 daily slots &nbsp;·&nbsp; 56 route combinations
          </p>
        </div>
      </section>

      {/* ── ROUTES GRID ─────────────────────────────────── */}
      <section
        aria-label="All pickup-to-dropoff routes"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-2 text-center">
            Browse by Pickup Area
          </h2>
          <p className="text-[#8A8A95] text-center mb-10 text-sm">
            Select your Sharjah area to see all available Dubai drop-off routes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PICKUP_POINTS.map((pickup) => {
              const dropoffRoutes = allRoutes.filter(
                (r) => r.pickup.slug === pickup.slug
              );
              const quickBookUrl = buildRouteWhatsApp(
                pickup.name,
                "Dubai (your preferred destination)"
              );

              return (
                <article
                  key={pickup.slug}
                  className="bg-[#151517] border border-[#2A2A2E] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#C9A227]/30 transition-colors"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0" />
                    <h3 className="text-[#EDEDED] font-bold text-base">
                      {pickup.name}, Sharjah
                    </h3>
                  </div>

                  {/* Drop-off links: 2-column grid */}
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                    {DROPOFF_POINTS.map((dropoff) => {
                      const route = dropoffRoutes.find(
                        (r) => r.dropoff.slug === dropoff.slug
                      );
                      if (!route) return null;
                      return (
                        <li key={dropoff.slug}>
                          <Link
                            href={`/routes/${route.slug}`}
                            className="group flex items-center gap-1.5 text-[#8A8A95] hover:text-[#C9A227] text-sm transition-colors"
                          >
                            <span
                              aria-hidden="true"
                              className="text-[#C9A227]/60 group-hover:text-[#C9A227] transition-colors"
                            >
                              →
                            </span>
                            {dropoff.name}, Dubai
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* WhatsApp quick-book */}
                  <a
                    href={quickBookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <WaIcon className="w-4 h-4 fill-white shrink-0" />
                    Quick Book from {pickup.name}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section
        aria-label="Book your car lift"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#151517] border-t border-[#2A2A2E]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-3">
            Ready to Book Your Daily Ride?
          </h2>
          <p className="text-[#8A8A95] text-sm mb-2">
            Don&apos;t see your exact route? We accommodate{" "}
            <span className="text-[#EDEDED]">custom pickup and drop-off points</span> on request —
            just message us on WhatsApp.
          </p>
          <p className="text-[#8A8A95] text-sm mb-8">
            Monthly passes and one-time bookings available.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-[0_0_20px_rgba(37,211,102,0.25)] text-sm"
            >
              <WaIcon className="w-4 h-4 fill-white shrink-0" />
              WhatsApp Us
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[#1E1E21] hover:bg-[#27272B] border border-[#2A2A2E] hover:border-[#C9A227]/40 text-[#EDEDED] font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              <Phone size={16} className="text-[#C9A227]" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
