import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/ui/MapEmbed";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact M1 Car Lift — Book or Enquire",
  description:
    "Contact M1 Car Lift to book a car lift between Sharjah and Dubai, request a quote, or ask any questions. Call, WhatsApp, or email — we respond within 1 hour.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    subtext: "Call us Mon–Sat, 8 AM – 10 PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: BUSINESS.whatsapp,
    subtext: "Fastest response — usually under 1 hour",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    subtext: "For corporate enquiries and invoicing",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: BUSINESS.hours,
    href: null,
    subtext: "Closed on Sundays and UAE public holidays",
  },
  {
    icon: MapPin,
    label: "Address",
    value: BUSINESS.address,
    href: BUSINESS.mapsLink,
    subtext: `Plus Code: ${BUSINESS.plusCode}`,
    external: true,
  },
];

export default function ContactPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BUSINESS.url}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

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
            <span className="text-[#EDEDED]">Contact</span>
          </nav>
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#EDEDED] mb-4 max-w-2xl leading-tight">
            Book a Car Lift or Ask Us Anything
          </h1>
          <p className="text-[#8A8A95] text-lg max-w-xl">
            Whether you want to book a seat, get a quote, or ask a question — we&apos;re here and will respond within an hour.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Contact Details */}
          <aside className="lg:col-span-2">
            <div className="bg-[#151517] rounded-2xl border border-[#2A2A2E] p-6 sticky top-24">
              <h2 className="text-[#EDEDED] font-bold text-lg mb-6">Contact Details</h2>
              <ul className="flex flex-col gap-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1E1E21] border border-[#C9A227]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-[#C9A227]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8A8A95] uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="text-[#EDEDED] font-medium text-sm hover:text-[#C9A227] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#EDEDED] font-medium text-sm">{item.value}</p>
                        )}
                        <p className="text-[#8A8A95] text-xs mt-0.5">{item.subtext}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <MapEmbed variant="full" className="mt-6 w-full h-56" />
            </div>
          </aside>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#151517] rounded-2xl border border-[#2A2A2E] p-6 sm:p-8">
              <h2 className="text-[#EDEDED] font-bold text-xl mb-2">Send Us a Message</h2>
              <p className="text-[#8A8A95] text-sm mb-6">
                For bookings, use our{" "}
                <a href="/#booking" className="text-[#C9A227] hover:underline">online booking form</a>. For general enquiries, use this form.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
