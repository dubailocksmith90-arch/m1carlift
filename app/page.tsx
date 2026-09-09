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
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}${BUSINESS.logo}`,
      width: 591,
      height: 611,
    },
    image: `${BUSINESS.url}${BUSINESS.logo}`,
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
                  href={BUSINESS.whatsappBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm shadow-[0_0_20px_rgba(37,211,102,0.25)]"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
