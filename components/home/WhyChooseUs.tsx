import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, CreditCard, Star, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Punctual, Every Time",
    body: "We depart on schedule — no waiting games. Your driver is there before you, not the other way around.",
    href: null,
    external: false,
  },
  {
    icon: MapPin,
    title: "Extensive Route Coverage",
    body: "From Sharjah City Centre to JLT, Media City, TECOM, Internet City, Downtown Dubai, and every SZR Metro station.",
    href: "/services#routes",
    external: false,
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    body: "What you see is what you pay. No surge pricing, no hidden fees, no last-minute surprises.",
    href: "/contact",
    external: false,
  },
  {
    icon: Star,
    title: "5.0 Google Rating",
    body: "Our passengers consistently rate us five stars for comfort, reliability, and driver professionalism.",
    href: "https://www.google.com/maps/place/M1+Car+Lift/@25.2048541,55.2682079,17z",
    external: true,
  },
  {
    icon: ShieldCheck,
    title: "Safe & Insured",
    body: "Every vehicle is insured and every driver is vetted, licensed, and trained for UAE road conditions.",
    href: null,
    external: false,
  },
  {
    icon: CheckCircle2,
    title: "Easy Booking",
    body: "Book your seat in under two minutes via our online form or WhatsApp — no app download required.",
    href: "/#booking",
    external: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151517] border-y border-[#2A2A2E]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Why M1 Car Lift?</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4">
            The Smarter Way to Commute Sharjah–Dubai
          </h2>
          <p className="text-[#8A8A95] max-w-2xl mx-auto">
            Thousands of UAE residents make the Sharjah–Dubai commute daily. Here&apos;s why they choose M1 Car Lift over driving alone, taxis, or the bus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            const cardClass =
              "bg-[#0A0A0B] rounded-xl p-6 border border-[#2A2A2E] hover:border-[#C9A227]/30 transition-colors duration-300 group";
            const inner = (
              <>
                <Icon size={24} className="text-[#C9A227] mb-4" />
                <h3 className="text-[#EDEDED] font-semibold text-base mb-2">{r.title}</h3>
                <p className="text-[#8A8A95] text-sm leading-relaxed">{r.body}</p>
                {r.href && (
                  <span className="mt-3 block text-xs text-[#C9A227]/60 group-hover:text-[#C9A227] transition-colors">
                    {r.external ? "View on Google Maps →" : "Learn more →"}
                  </span>
                )}
              </>
            );
            if (r.href && r.external) {
              return (
                <a
                  key={r.title}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              );
            }
            if (r.href) {
              return (
                <Link key={r.title} href={r.href} className={cardClass}>
                  {inner}
                </Link>
              );
            }
            return (
              <div key={r.title} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
