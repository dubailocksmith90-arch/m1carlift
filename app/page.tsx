import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import TrustBar from "@/components/home/TrustBar";
import FleetSection from "@/components/home/FleetSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RoutesCoverage from "@/components/home/RoutesCoverage";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import BookingForm from "@/components/home/BookingForm";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "M1 Car Lift | Sharjah to Dubai Daily Car Lift Service",
  description:
    "M1 Car Lift provides reliable, affordable daily car lift services between Sharjah and Dubai. Covering JLT, Media City, TECOM, Internet City, Downtown Dubai, and all Sheikh Zayed Road Metro stations. 5.0 Google rating. Book now.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description:
      "M1 Car Lift provides daily car lift and private transport services between Sharjah and Dubai, UAE. Covering all major zones including JLT, Media City, TECOM, Internet City, Downtown Dubai, Business Bay, and all SZR Metro stations.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    areaServed: ["Sharjah", "Dubai"],
    serviceType: "Car Lift / Private Transport",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Bank Transfer",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    hasMap: BUSINESS.mapsLink,
    sameAs: [
      BUSINESS.whatsapp,
      "https://maps.google.com/?cid=5523547756536358254",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a car lift from Sharjah to Dubai cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on pick-up and drop-off locations and booking type (monthly pass vs one-time). Contact M1 Car Lift via WhatsApp (+971 56 582 8471) or the booking form for an exact quote.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does M1 Car Lift cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "M1 Car Lift picks up from major Sharjah areas including Al Nahda, Al Qasimia, Muwaileh, Al Taawun, and City Centre. Drop-offs cover Downtown Dubai, Business Bay, DIFC, Sheikh Zayed Road, Al Barsha, TECOM, Internet City, Media City, JLT, Dubai Marina, and all SZR Metro stations.",
        },
      },
      {
        "@type": "Question",
        name: "Is car lift service safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All M1 Car Lift drivers are licensed, background-checked, and trained for UAE road conditions. Every vehicle is regularly maintained and fully insured.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a car lift with M1 Car Lift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book online via the booking form on the M1 Car Lift website, or WhatsApp +971 56 582 8471. Provide your name, pick-up, drop-off, date, and preferred time. Confirmation comes within one hour.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[92vh] flex items-center pt-20 pb-12 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,162,39,0.12), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Vehicle silhouette — decorative, large screens only */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-0 left-0 w-[46%] hidden xl:block"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/coaster-hero.webp"
            alt=""
            width={663}
            height={553}
            priority
            className="w-full object-contain"
            style={{
              maskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 20%, black 65%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 20%, black 65%)",
              opacity: 0.8,
            }}
          />
          {/* Gold ambient glow behind vehicle */}
          <div
            className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 80% at 35% 100%, rgba(201,162,39,0.07), transparent)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1E1E21] border border-[#C9A227]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
                  Sharjah ↔ Dubai Daily Service
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EDEDED] leading-[1.1] tracking-tight mb-6"
              >
                Sharjah to Dubai{" "}
                <span className="text-[#C9A227]">Car Lift Service</span>
                {" "}— Daily, On-Time, Reliable
              </h1>

              <p className="text-[#8A8A95] text-lg leading-relaxed mb-8 max-w-lg">
                M1 Car Lift connects Sharjah residents to Dubai&apos;s business districts every day.
                Safe, comfortable, and significantly cheaper than solo driving or daily taxis.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#E8C04A] text-[#0A0A0B] font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-[0_0_30px_rgba(201,162,39,0.3)] hover:shadow-[0_0_40px_rgba(201,162,39,0.5)] text-sm"
                >
                  Book Your Seat
                  <ArrowDown size={16} />
                </a>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1E1E21] hover:bg-[#27272B] text-[#EDEDED] border border-[#2A2A2E] hover:border-[#C9A227]/40 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 bg-[#1E1E21] hover:bg-[#27272B] text-[#EDEDED] border border-[#2A2A2E] hover:border-[#C9A227]/40 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm"
                >
                  <Phone size={16} className="text-[#C9A227]" />
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8A8A95]">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C9A227]">★</span> 5.0 Google Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C9A227]">✓</span> Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C9A227]">✓</span> Mon–Sat, 8 AM – 10 PM
                </span>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div
              id="booking"
              className="bg-[#151517] rounded-2xl border border-[#2A2A2E] p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-[#EDEDED] text-xl font-bold mb-1">Book Your Car Lift</h2>
              <p className="text-[#8A8A95] text-sm mb-6">
                Fill in your details and we&apos;ll confirm your seat within 1 hour.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <FleetSection />
      <ServicesGrid />
      <WhyChooseUs />
      <RoutesCoverage />
      <Testimonials />
      <BlogPreview />
      <FAQ />

      {/* Final CTA */}
      <section
        aria-label="Book now call to action"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#C9A227]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0B] mb-4">
            Ready to Simplify Your Sharjah–Dubai Commute?
          </h2>
          <p className="text-[#3A2800] text-base mb-8 max-w-xl mx-auto">
            Join hundreds of daily commuters who rely on M1 Car Lift for a stress-free, on-time ride. Book today — no app required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#0A0A0B] text-[#C9A227] font-bold px-7 py-3.5 rounded-lg text-sm hover:bg-[#151517] transition-colors"
            >
              Book Now
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#0A0A0B] text-[#0A0A0B] font-bold px-7 py-3.5 rounded-lg text-sm hover:bg-[#0A0A0B] hover:text-[#C9A227] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
