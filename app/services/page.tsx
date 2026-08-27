import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Car, Briefcase, MapPin, CheckCircle2, Phone, MessageCircle, BookOpen } from "lucide-react";
import { BUSINESS, ROUTES } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Car Lift Services — Daily Commute, One-Time & Corporate",
  description:
    "M1 Car Lift services: daily commute passes, one-time bookings, and corporate accounts between Sharjah and Dubai. Fixed pricing, licensed drivers, door-to-door coverage.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "M1 Car Lift Services | Sharjah to Dubai",
    description: "Daily passes, one-time rides, and corporate car lift packages for the Sharjah–Dubai corridor.",
  },
};

const services = [
  {
    id: "daily-commute",
    icon: Calendar,
    image: { src: "/images/fleet-overview.webp", width: 663, height: 474, alt: "M1 Car Lift fleet for daily commute between Sharjah and Dubai" },
    title: "Daily Commute Pass",
    badge: "Most Popular",
    description:
      "The daily commute pass is designed for professionals who travel between Sharjah and Dubai five or six days a week. Lock in a recurring morning pick-up and evening return slot — your driver will be waiting, no need to re-book each day.",
    features: [
      "Fixed morning and evening departure times",
      "Monthly or weekly billing available",
      "Priority seat reservation",
      "WhatsApp updates for schedule changes",
      "Same driver for consistency and trust",
    ],
    cta: "Get Monthly Rate",
    forWho: "Best for: Office workers, corporate employees, daily commuters",
    blogLink: { href: "/blog/advantages-car-lift-service", label: "Read our guide: Advantages of Car Lift Service vs Driving Alone" },
  },
  {
    id: "one-time",
    icon: Car,
    image: { src: "/images/hiace-van.webp", width: 663, height: 553, alt: "M1 Car Lift Toyota HiAce van for one-time Sharjah to Dubai rides" },
    title: "One-Time Booking",
    badge: null,
    description:
      "Need a ride on a specific day? Our one-time car lift service lets you book a single trip from Sharjah to any major Dubai destination — or the return journey — at a transparent, upfront fare. No subscription required.",
    features: [
      "Book up to 30 days in advance",
      "Flexible pick-up locations across Sharjah",
      "All major Dubai zones covered",
      "Cash or bank transfer payment",
      "Confirmation via WhatsApp within 1 hour",
    ],
    cta: "Book a One-Time Ride",
    forWho: "Best for: Occasional visitors, trial bookings, flexible workers",
    blogLink: { href: "/blog/tips-comfortable-commute-sharjah-dubai", label: "Read our guide: Tips for a Comfortable Commute" },
  },
  {
    id: "corporate",
    icon: Briefcase,
    image: { src: "/images/coaster-carbon.webp", width: 663, height: 600, alt: "M1 Car Lift Toyota Coaster bus for corporate group transport Sharjah to Dubai" },
    title: "Corporate Accounts",
    badge: "For Teams",
    description:
      "Do you run a company with employees commuting from Sharjah to Dubai? M1 Car Lift offers corporate transport packages that simplify logistics, reduce your team's commuting stress, and often cost less than individual taxis or allowances.",
    features: [
      "Dedicated booking coordinator",
      "Multiple pick-up points for your team",
      "Monthly invoicing for accounting ease",
      "Scalable: 2 to 20+ employees",
      "Custom schedules to match office hours",
    ],
    cta: "Enquire About Corporate Rates",
    forWho: "Best for: SMEs, startups, companies based in Sharjah free zones",
    blogLink: { href: "/blog/environmental-social-benefits-car-lift-sharjah-dubai", label: "Read our guide: Environmental & Social Benefits of Car Sharing" },
  },
];

const routeHighlights = [
  { from: "Al Nahda / City Centre (Sharjah)", to: "Downtown Dubai / Business Bay" },
  { from: "Muwaileh / Al Taawun", to: "DIFC / Sheikh Zayed Road" },
  { from: "Al Qasimia / Al Nahda", to: "TECOM / Internet City / Media City" },
  { from: "Any Sharjah Zone", to: "JLT / Dubai Marina / JBR" },
  { from: "Any Sharjah Zone", to: "All SZR Metro Stations" },
];

export default function ServicesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.url}/services` },
    ],
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Daily Commute Car Lift Pass — Sharjah to Dubai",
      description:
        "Fixed morning and evening car lift slots between Sharjah and Dubai, available on a weekly or monthly basis. Priority seat reservation, same driver, WhatsApp schedule updates.",
      provider: { "@type": "LocalBusiness", name: BUSINESS.name, url: BUSINESS.url },
      areaServed: ["Sharjah", "Dubai"],
      serviceType: "Car Lift / Daily Commute Transport",
      url: `${BUSINESS.url}/services#daily-commute`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "One-Time Car Lift Booking — Sharjah to Dubai",
      description:
        "Single-trip car lift from Sharjah to any major Dubai destination. No subscription required. Cash or bank transfer payment. Confirmation within 1 hour via WhatsApp.",
      provider: { "@type": "LocalBusiness", name: BUSINESS.name, url: BUSINESS.url },
      areaServed: ["Sharjah", "Dubai"],
      serviceType: "Car Lift / One-Time Ride",
      url: `${BUSINESS.url}/services#one-time`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Corporate Car Lift Accounts — Sharjah to Dubai",
      description:
        "Group car lift packages for companies with employees commuting from Sharjah to Dubai. Multiple pick-up points, monthly invoicing, scalable from 2 to 20+ employees.",
      provider: { "@type": "LocalBusiness", name: BUSINESS.name, url: BUSINESS.url },
      areaServed: ["Sharjah", "Dubai"],
      serviceType: "Corporate Transport / Group Car Lift",
      url: `${BUSINESS.url}/services#corporate`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {serviceSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(201,162,39,0.10), transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#8A8A95] mb-6">
            <Link href="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#EDEDED]">Services</span>
          </nav>
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#EDEDED] mb-4 max-w-3xl leading-tight">
            Car Lift Services Between Sharjah and Dubai
          </h1>
          <p className="text-[#8A8A95] text-lg max-w-2xl">
            M1 Car Lift offers flexible transport options for every type of UAE commuter — from the daily 9-to-5 to corporate teams and flexible remote workers.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section aria-labelledby="services-list-heading" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 id="services-list-heading" className="sr-only">Available Services</h2>
          <div className="flex flex-col gap-10">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-[#151517] rounded-2xl border border-[#2A2A2E] overflow-hidden scroll-mt-24"
                >
                  {/* Vehicle image header */}
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <Image
                      src={svc.image.src}
                      alt={svc.image.alt}
                      width={svc.image.width}
                      height={svc.image.height}
                      className="w-full h-full object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151517] via-[#151517]/40 to-transparent" />
                    {svc.badge && (
                      <span className="absolute top-4 left-4 text-xs bg-[#C9A227] text-[#0A0A0B] px-3 py-1 rounded-full font-bold shadow-lg">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#1E1E21] border border-[#C9A227]/30 flex items-center justify-center">
                          <Icon size={22} className="text-[#C9A227]" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-[#EDEDED] mb-3">{svc.title}</h2>
                      <p className="text-[#8A8A95] text-base leading-relaxed mb-6">{svc.description}</p>
                      <p className="text-xs text-[#C9A227] font-medium mb-4">{svc.forWho}</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <a
                          href={BUSINESS.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200"
                        >
                          <MessageCircle size={15} />
                          {svc.cta}
                        </a>
                        <Link
                          href={svc.blogLink.href}
                          className="inline-flex items-center gap-1.5 text-[#8A8A95] hover:text-[#C9A227] text-xs transition-colors"
                        >
                          <BookOpen size={12} />
                          {svc.blogLink.label}
                        </Link>
                      </div>
                    </div>
                    <div className="bg-[#0A0A0B] rounded-xl p-6 border border-[#2A2A2E]">
                      <h3 className="text-[#EDEDED] font-semibold text-sm mb-4 uppercase tracking-wider">What&apos;s Included</h3>
                      <ul className="flex flex-col gap-3">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-[#8A8A95]">
                            <CheckCircle2 size={15} className="text-[#C9A227] shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  </div>{/* /p-8 wrapper */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Route Highlights */}
      <section id="routes" aria-labelledby="routes-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151517] border-y border-[#2A2A2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Route Coverage</p>
            <h2 id="routes-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4">
              Popular Sharjah–Dubai Routes
            </h2>
            <p className="text-[#8A8A95] max-w-xl mx-auto">
              These are the most frequently booked routes. Don&apos;t see yours?{" "}
              <Link href="/contact" className="text-[#C9A227] hover:underline">Contact us</Link> — we accommodate custom routes wherever possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {routeHighlights.map((r) => (
              <div
                key={r.to}
                className="bg-[#0A0A0B] rounded-xl p-5 border border-[#2A2A2E] flex items-center gap-4"
              >
                <MapPin size={18} className="text-[#C9A227] shrink-0" />
                <div className="text-sm">
                  <p className="text-[#EDEDED] font-medium">{r.from}</p>
                  <p className="text-[#8A8A95]">→ {r.to}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#EDEDED] mb-4">Pricing</h2>
          {/* PLACEHOLDER: confirm real pricing tiers with client before publishing */}
          <p className="text-[#8A8A95] leading-relaxed mb-6">
            We don&apos;t publish fixed prices here because fares vary based on your specific pick-up and drop-off locations, booking frequency, and group size. We&apos;re consistently competitive against taxis and Uber for the Sharjah–Dubai route.
          </p>
          <p className="text-[#8A8A95] mb-8">
            Contact us for a personalised quote — most commuters save 30–50% versus hailing a taxi daily.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              <MessageCircle size={15} />
              Get a Quote on WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[#1E1E21] border border-[#2A2A2E] text-[#EDEDED] hover:border-[#C9A227]/40 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              <Phone size={15} className="text-[#C9A227]" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
