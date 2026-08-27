import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Users, Route, Star, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About M1 Car Lift — Our Story, Mission & Safety Standards",
  description:
    "Learn about M1 Car Lift: who we are, how we vet our drivers, our safety standards, and why hundreds of UAE commuters trust us for the Sharjah–Dubai route every day.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About M1 Car Lift | Sharjah–Dubai Car Lift Service",
    description: "Our story, mission, and commitment to safe, reliable, on-time transport between Sharjah and Dubai.",
  },
};

const values = [
  {
    icon: Clock,
    title: "Punctuality",
    body: "We believe your time is non-negotiable. Our schedule is structured so drivers arrive at pick-up points before you do.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    body: "Every driver undergoes background checks and holds a valid UAE transport license. Vehicles are maintained to roadworthy standards.",
  },
  {
    icon: Star,
    title: "Consistency",
    body: "We match regular commuters with the same driver whenever possible, so you know exactly who to expect and can build real trust.",
  },
  {
    icon: Users,
    title: "Community",
    body: "Car lift isn't just transport — it's community. Many of our passengers have formed friendships and professional connections over shared commutes.",
  },
];

const safetySteps = [
  "All drivers hold a valid UAE driving license and transport permit",
  "Vehicles undergo monthly safety inspections",
  "Fully comprehensive insurance coverage on every ride",
  "WhatsApp contact maintained with every active driver",
  // PLACEHOLDER: add specific certifications or regulatory body if applicable
  "Compliance with UAE transport authority regulations",
];

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${BUSINESS.url}/about` },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description:
      "M1 Car Lift is a licensed car lift and private transport service operating between Sharjah and Dubai, UAE.",
    areaServed: ["Sharjah", "Dubai"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(201,162,39,0.10), transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#8A8A95] mb-6">
            <Link href="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#EDEDED]">About</span>
          </nav>
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#EDEDED] mb-6 max-w-3xl leading-tight">
            Built for the Sharjah–Dubai Commuter
          </h1>
          <p className="text-[#8A8A95] text-lg max-w-2xl leading-relaxed">
            M1 Car Lift was founded to solve a real problem: the daily grind of commuting between Sharjah and Dubai in your own car, stuck in traffic, paying for fuel, parking, and maintenance — alone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151517] rounded-2xl border border-[#2A2A2E] p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#EDEDED] mb-5">Why We Started</h2>
            {/*
              PLACEHOLDER: Replace with the client's actual founding story.
              Questions to ask: When was the business started? What personal experience inspired it?
              How many drivers/vehicles do you have? Any notable milestone moments?
            */}
            <div className="prose max-w-none text-[#8A8A95] space-y-4 text-base leading-relaxed">
              <p>
                The Sharjah–Dubai corridor is one of the busiest commute routes in the UAE. Hundreds of thousands of people make this journey every working day — by car, by metro, by bus — often spending 60 to 90 minutes each way in congested traffic.
              </p>
              <p>
                M1 Car Lift was founded to offer a smarter alternative: a structured, affordable, and reliable car lift service where commuters share the journey and the cost. Our founders experienced this commute firsthand and recognized that most people preferred sharing a comfortable vehicle over the stress and expense of driving solo.
              </p>
              <p>
                Today, M1 Car Lift serves hundreds of commuters each week, connecting Sharjah&apos;s residential areas with Dubai&apos;s major employment hubs including Media City, TECOM, Internet City, JLT, Downtown Dubai, and the Sheikh Zayed Road corridor.
              </p>
              <p>
                We operate Monday through Saturday, 08:00 AM to 10:00 PM, and our 5.0 Google rating reflects the consistency and professionalism our passengers have come to rely on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151517] border-y border-[#2A2A2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-[#0A0A0B] rounded-xl p-6 border border-[#2A2A2E] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E1E21] border border-[#C9A227]/30 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[#C9A227]" />
                  </div>
                  <h3 className="text-[#EDEDED] font-semibold mb-2">{v.title}</h3>
                  <p className="text-[#8A8A95] text-sm leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Driver Vetting */}
      <section aria-labelledby="safety-heading" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Safety & Compliance</p>
              <h2 id="safety-heading" className="text-3xl font-bold text-[#EDEDED] mb-5">
                How We Vet Our Drivers and Vehicles
              </h2>
              <p className="text-[#8A8A95] leading-relaxed mb-6">
                Every driver on the M1 Car Lift network meets our strict vetting standards before their first trip. Passenger safety is non-negotiable, and we back it with full insurance and ongoing monitoring.
              </p>
              <div className="flex items-center gap-3 text-sm text-[#8A8A95]">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-[#C9A227] fill-[#C9A227]" />
                  <span className="text-[#EDEDED] font-semibold">{BUSINESS.rating}</span>
                </div>
                <span>Google Rating</span>
                <span className="text-[#2A2A2E]">|</span>
                <span>{BUSINESS.reviewCount}+ reviews</span>
              </div>
            </div>
            <div className="bg-[#151517] rounded-2xl p-6 border border-[#2A2A2E]">
              <h3 className="text-[#EDEDED] font-semibold text-sm uppercase tracking-wider mb-5">Our Safety Standards</h3>
              <ul className="flex flex-col gap-3">
                {safetySteps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#8A8A95]">
                    <CheckCircle2 size={15} className="text-[#C9A227] shrink-0 mt-0.5" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#151517] border-t border-[#2A2A2E]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Route size={24} className="text-[#C9A227] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-[#EDEDED] mb-3">Our Service Area</h2>
              <p className="text-[#8A8A95] leading-relaxed mb-4">
                M1 Car Lift operates exclusively on the Sharjah–Dubai corridor, the UAE&apos;s busiest daily commute route. Our pick-up points span major Sharjah residential and commercial zones, and our Dubai coverage includes every significant employment hub from Deira to Dubai Marina.
              </p>
              <Link href="/services#routes" className="text-[#C9A227] hover:text-[#E8C04A] text-sm font-medium underline underline-offset-4 transition-colors">
                View full route coverage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#EDEDED] mb-4">Have Questions? Talk to Us.</h2>
          <p className="text-[#8A8A95] mb-8">
            We&apos;re a real team, available Monday to Saturday, 08:00 AM – 10:00 PM. Reach us by phone or WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[#1E1E21] border border-[#2A2A2E] text-[#EDEDED] hover:border-[#C9A227]/40 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              <Phone size={15} className="text-[#C9A227]" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
