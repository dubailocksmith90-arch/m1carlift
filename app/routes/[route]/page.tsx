import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { notFound } from "next/navigation";
import WaIcon from "@/components/ui/WaIcon";
import { BUSINESS } from "@/lib/utils";
import {
  getAllRoutes,
  getRouteBySlug,
  buildRouteWhatsApp,
  SCHEDULE,
} from "@/lib/routes";

/* ── Static params: generate all 56 routes at build time ─── */
export function generateStaticParams() {
  return getAllRoutes().map((r) => ({ route: r.slug }));
}

/* ── Per-route metadata ────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string }>;
}): Promise<Metadata> {
  const { route: routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);
  if (!route) return {};

  const title = `Car Lift ${route.pickup.name} to ${route.dropoff.name} | Sharjah–Dubai`;
  const description = `Daily car lift from ${route.pickup.name}, Sharjah to ${route.dropoff.fullName}, Dubai. Morning slots at 08:00, 09:00, 10:00 AM and evening slots at 05:00, 06:00, 07:00 PM — Monday to Saturday. Book via WhatsApp.`;
  const canonicalUrl = `${BUSINESS.url}/routes/${route.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/routes/${route.slug}` },
    openGraph: {
      type: "website",
      locale: "en_AE",
      url: canonicalUrl,
      siteName: BUSINESS.name,
      title: `${title} | M1 Car Lift`,
      description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `M1 Car Lift — ${route.pickup.name} to ${route.dropoff.name}`,
        },
      ],
    },
  };
}

/* ── Page component ─────────────────────────────────────────── */
export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ route: string }>;
}) {
  const { route: routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);

  if (!route) notFound();

  const waUrl = buildRouteWhatsApp(route.pickup.name, route.dropoff.fullName);

  /* Related routes: other dropoffs from same pickup (up to 4, excluding current) */
  const relatedRoutes = getAllRoutes()
    .filter(
      (r) => r.pickup.slug === route.pickup.slug && r.dropoff.slug !== route.dropoff.slug
    )
    .slice(0, 4);

  /* ── JSON-LD schemas ──────────────────────────────────────── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Car Lift Routes",
        item: `${BUSINESS.url}/routes`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${route.pickup.name} to ${route.dropoff.name}`,
        item: `${BUSINESS.url}/routes/${route.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Car Lift from ${route.pickup.name}, Sharjah to ${route.dropoff.fullName}, Dubai`,
    description: `M1 Car Lift provides a daily shared car lift service from ${route.pickup.name} in Sharjah to ${route.dropoff.fullName} in Dubai. Six departure times available Monday to Saturday.`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
    },
    areaServed: [
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Dubai" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: BUSINESS.whatsapp,
      servicePhone: BUSINESS.phone,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What times does the car lift from ${route.pickup.name} to ${route.dropoff.name} depart?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `M1 Car Lift offers six daily departure times from ${route.pickup.name} to ${route.dropoff.fullName}: morning slots at 08:00 AM, 09:00 AM, and 10:00 AM, and evening return slots at 05:00 PM, 06:00 PM, and 07:00 PM — Monday to Saturday.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I book a car lift from ${route.pickup.name} to ${route.dropoff.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Booking is simple: WhatsApp M1 Car Lift at +971 56 582 8471, mention your pickup at ${route.pickup.name} and drop-off at ${route.dropoff.fullName}, choose your preferred time slot, and receive confirmation within one hour. No app required.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does the journey from ${route.pickup.name} to ${route.dropoff.name} take?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The journey from ${route.pickup.name}, Sharjah to ${route.dropoff.fullName}, Dubai typically takes 35 to 60 minutes depending on traffic on Sheikh Zayed Road (SZR). Morning rush hours may add additional travel time.`,
        },
      },
      {
        "@type": "Question",
        name: `How much does a car lift from ${route.pickup.name} to ${route.dropoff.name} cost?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Pricing for the ${route.pickup.name} to ${route.dropoff.fullName} route depends on booking type (monthly pass or one-time ride) and seat preference. Contact M1 Car Lift via WhatsApp (+971 56 582 8471) for an exact quote tailored to your schedule.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section
        aria-labelledby="route-heading"
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#8A8A95]">
              <li>
                <Link href="/" className="hover:text-[#C9A227] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#2A2A2E]">
                /
              </li>
              <li>
                <Link href="/routes" className="hover:text-[#C9A227] transition-colors">
                  Routes
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#2A2A2E]">
                /
              </li>
              <li className="text-[#C9A227] font-medium truncate max-w-[200px] sm:max-w-none">
                {route.pickup.name} → {route.dropoff.name}
              </li>
            </ol>
          </nav>

          {/* "Daily" badge */}
          <div className="inline-flex items-center gap-2 bg-[#1E1E21] border border-[#C9A227]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
              Daily — Mon to Sat
            </span>
          </div>

          {/* H1 */}
          <h1
            id="route-heading"
            className="text-4xl sm:text-5xl font-bold text-[#EDEDED] leading-tight tracking-tight mb-5"
          >
            Car Lift{" "}
            <span className="text-[#C9A227]">{route.pickup.name}</span>{" "}
            <span className="text-[#8A8A95] font-normal">to</span>{" "}
            <span className="text-[#C9A227]">{route.dropoff.name}</span>
          </h1>

          {/* AEO snippet paragraph */}
          <p className="text-[#8A8A95] text-lg leading-relaxed mb-8 max-w-2xl">
            M1 Car Lift runs a daily shared car lift from{" "}
            <strong className="text-[#EDEDED]">{route.pickup.name}, Sharjah</strong> to{" "}
            <strong className="text-[#EDEDED]">{route.dropoff.fullName}, Dubai</strong> on Monday
            through Saturday. Morning departures at{" "}
            <strong className="text-[#EDEDED]">08:00 AM, 09:00 AM, and 10:00 AM</strong>; evening
            return trips at{" "}
            <strong className="text-[#EDEDED]">05:00 PM, 06:00 PM, and 07:00 PM</strong>. Book via
            WhatsApp — confirmation within one hour.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)] text-sm"
            >
              <WaIcon className="w-4 h-4 fill-white shrink-0" />
              Book This Route on WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ──────────────────────────────────────── */}
      <section
        aria-label="Departure schedule"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#151517]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-2">
            Departure Schedule
          </h2>
          <p className="text-[#8A8A95] text-sm mb-8">
            {route.pickup.name} → {route.dropoff.name} &nbsp;·&nbsp; Monday – Saturday
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Morning card */}
            <div className="bg-[#1E1E21] border border-[#2A2A2E] rounded-2xl p-6">
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-5">
                Morning — Sharjah to Dubai
              </p>
              <ul className="flex flex-col gap-3">
                {SCHEDULE.morning.map((time) => (
                  <li
                    key={time}
                    className="flex items-center gap-3 text-[#EDEDED] font-semibold text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center shrink-0"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                    </span>
                    {time}
                  </li>
                ))}
              </ul>
            </div>

            {/* Evening card */}
            <div className="bg-[#1E1E21] border border-[#2A2A2E] rounded-2xl p-6">
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-5">
                Evening — Dubai to Sharjah
              </p>
              <ul className="flex flex-col gap-3">
                {SCHEDULE.evening.map((time) => (
                  <li
                    key={time}
                    className="flex items-center gap-3 text-[#EDEDED] font-semibold text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center shrink-0"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                    </span>
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROUTE INFO ────────────────────────────────────── */}
      <section
        aria-label="Route details and how to book"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B]"
      >
        <div className="max-w-4xl mx-auto">
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            <div className="bg-[#151517] border border-[#2A2A2E] rounded-xl p-5 text-center">
              <p className="text-[#8A8A95] text-xs uppercase tracking-widest mb-1">
                Pickup Area
              </p>
              <p className="text-[#EDEDED] font-bold text-lg">{route.pickup.name}</p>
              <p className="text-[#8A8A95] text-xs mt-0.5">Sharjah</p>
            </div>
            <div className="bg-[#151517] border border-[#2A2A2E] rounded-xl p-5 text-center">
              <p className="text-[#8A8A95] text-xs uppercase tracking-widest mb-1">
                Drop-off Area
              </p>
              <p className="text-[#EDEDED] font-bold text-lg">{route.dropoff.name}</p>
              <p className="text-[#8A8A95] text-xs mt-0.5">Dubai</p>
            </div>
            <div className="bg-[#151517] border border-[#2A2A2E] rounded-xl p-5 text-center">
              <p className="text-[#8A8A95] text-xs uppercase tracking-widest mb-1">
                Journey Time
              </p>
              <p className="text-[#EDEDED] font-bold text-lg">35–60 min</p>
              <p className="text-[#8A8A95] text-xs mt-0.5">via SZR</p>
            </div>
          </div>

          {/* How to book */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-8">
            How to Book in 3 Steps
          </h2>
          <ol className="flex flex-col sm:flex-row gap-6">
            {[
              {
                step: "1",
                title: "WhatsApp Us",
                detail: `Send a message to ${BUSINESS.phone} with your name, pickup at ${route.pickup.name}, and preferred time slot.`,
              },
              {
                step: "2",
                title: "Confirm Your Booking",
                detail:
                  "Our team confirms availability and pricing within one hour. Monthly passes and one-time rides available.",
              },
              {
                step: "3",
                title: "Board Your Ride",
                detail: `Be at the agreed ${route.pickup.name} pickup point a few minutes before departure. Your driver will be on time.`,
              },
            ].map(({ step, title, detail }) => (
              <li
                key={step}
                className="flex-1 bg-[#151517] border border-[#2A2A2E] rounded-xl p-5 flex flex-col gap-3"
              >
                <span className="w-9 h-9 rounded-full bg-[#C9A227] text-[#0A0A0B] font-bold text-base flex items-center justify-center shrink-0">
                  {step}
                </span>
                <h3 className="text-[#EDEDED] font-bold text-base">{title}</h3>
                <p className="text-[#8A8A95] text-sm leading-relaxed">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section
        aria-label="Frequently asked questions"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#151517]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-8">
            {/* Q1 */}
            <div>
              <h3 className="text-[#EDEDED] font-bold text-base mb-2">
                What times does the car lift from {route.pickup.name} to{" "}
                {route.dropoff.name} depart?
              </h3>
              <p className="text-[#8A8A95] text-sm leading-relaxed">
                M1 Car Lift offers six daily departure times from {route.pickup.name} to{" "}
                {route.dropoff.fullName}: morning slots at 08:00 AM, 09:00 AM, and 10:00 AM,
                and evening return slots at 05:00 PM, 06:00 PM, and 07:00 PM — Monday to Saturday.
              </p>
            </div>

            {/* Q2 */}
            <div>
              <h3 className="text-[#EDEDED] font-bold text-base mb-2">
                How do I book a car lift from {route.pickup.name} to {route.dropoff.name}?
              </h3>
              <p className="text-[#8A8A95] text-sm leading-relaxed">
                Booking is simple: WhatsApp M1 Car Lift at {BUSINESS.phone}, mention your pickup at{" "}
                {route.pickup.name} and drop-off at {route.dropoff.fullName}, choose your preferred
                time slot, and receive confirmation within one hour. No app required.
              </p>
            </div>

            {/* Q3 */}
            <div>
              <h3 className="text-[#EDEDED] font-bold text-base mb-2">
                How long does the journey from {route.pickup.name} to {route.dropoff.name} take?
              </h3>
              <p className="text-[#8A8A95] text-sm leading-relaxed">
                The journey from {route.pickup.name}, Sharjah to {route.dropoff.fullName}, Dubai
                typically takes 35 to 60 minutes depending on traffic on Sheikh Zayed Road (SZR).
                Morning rush hours may add additional travel time.
              </p>
            </div>

            {/* Q4 */}
            <div>
              <h3 className="text-[#EDEDED] font-bold text-base mb-2">
                How much does a car lift from {route.pickup.name} to {route.dropoff.name} cost?
              </h3>
              <p className="text-[#8A8A95] text-sm leading-relaxed">
                Pricing for the {route.pickup.name} to {route.dropoff.fullName} route depends on
                booking type (monthly pass or one-time ride) and seat preference. Contact M1 Car
                Lift via WhatsApp ({BUSINESS.phone}) for an exact quote tailored to your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER ROUTES ──────────────────────────────────── */}
      {relatedRoutes.length > 0 && (
        <section
          aria-label="Other routes from same pickup"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B]"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#EDEDED] mb-2">
              Other Routes from {route.pickup.name}
            </h2>
            <p className="text-[#8A8A95] text-sm mb-8">
              Also serving these Dubai destinations from {route.pickup.name}, Sharjah:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/routes/${r.slug}`}
                  className="group bg-[#151517] border border-[#2A2A2E] hover:border-[#C9A227]/40 rounded-xl p-4 flex items-center justify-between transition-colors"
                >
                  <div>
                    <p className="text-[#EDEDED] font-semibold text-sm group-hover:text-[#C9A227] transition-colors">
                      {r.pickup.name} → {r.dropoff.name}
                    </p>
                    <p className="text-[#8A8A95] text-xs mt-0.5">
                      Sharjah to {r.dropoff.fullName}
                    </p>
                  </div>
                  <span className="text-[#C9A227] text-lg font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section
        aria-label="Book your car lift"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#151517] border-t border-[#2A2A2E]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] mb-3">
            Book Your {route.pickup.name} to {route.dropoff.name} Ride Today
          </h2>
          <p className="text-[#8A8A95] text-sm mb-8">
            Join daily commuters who rely on M1 Car Lift for a stress-free, on-time ride
            from {route.pickup.name} to {route.dropoff.fullName}. Monthly passes available.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-[0_0_20px_rgba(37,211,102,0.25)] text-sm"
            >
              <WaIcon className="w-4 h-4 fill-white shrink-0" />
              WhatsApp to Book
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
