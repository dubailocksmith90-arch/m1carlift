"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How much does a car lift from Sharjah to Dubai cost?",
    a: "Pricing depends on the pick-up and drop-off locations and whether you book a monthly pass or a one-time ride. Contact us via WhatsApp or the booking form for an exact quote — we aim to be 30–50% cheaper than a daily taxi fare for the same route.",
  },
  {
    q: "What areas does M1 Car Lift cover?",
    a: "M1 Car Lift picks up from 7 Sharjah locations: Butina, Rolla, Al Qasimiya, Abu Shagara, Al Wahda, Al Khan, and Al Nahda. Drop-offs cover 8 major Dubai destinations: Jumeirah Lake Towers (JLT), Dubai Media City, TECOM, Al Barsha, Business Bay, Dubai Internet City, Jumeirah Beach Residence (JBR), and Dubai Marina. Custom pickup and drop-off points can also be arranged.",
  },
  {
    q: "Is car lift service safe?",
    a: "Yes. All M1 Car Lift drivers are licensed, background-checked, and trained for UAE road conditions. Every vehicle is regularly maintained and fully insured. We are a registered transport service in the UAE.",
  },
  {
    q: "How do I book a car lift?",
    a: "You can book online using the booking form on this page, or message us directly on WhatsApp at +971 56 582 8471. Provide your name, pick-up location, drop-off location, date, and preferred time — we&apos;ll confirm your seat within one hour.",
  },
  {
    q: "Can I get a monthly car lift pass?",
    a: "Yes. Monthly commute passes are available for regular Sharjah–Dubai commuters and are the most cost-effective option. Contact us for a monthly rate based on your specific route.",
  },
  {
    q: "Do you offer corporate car lift packages?",
    a: "Yes. We work with businesses that need regular transport for employees commuting between Sharjah and Dubai. Corporate accounts come with dedicated scheduling, invoicing, and priority booking. Contact us at booking@m1carlift.com to discuss.",
  },
  {
    q: "What time do car lift services operate?",
    a: "M1 Car Lift runs fixed daily departure slots Monday to Saturday. Morning trips from Sharjah depart at 08:00 AM, 09:00 AM, and 10:00 AM. Evening return trips from Dubai depart at 05:00 PM, 06:00 PM, and 07:00 PM. Book your preferred slot on WhatsApp to secure your seat.",
  },
  {
    q: "What if I need to cancel or reschedule my booking?",
    a: "Please notify us at least 12 hours in advance via WhatsApp so we can reassign your seat. We understand last-minute changes happen and will do our best to accommodate rescheduling where possible.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border border-[#2A2A2E] rounded-xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#1E1E21] transition-colors duration-200"
      >
        <span className="text-[#EDEDED] font-medium text-sm" itemProp="name">{q}</span>
        <ChevronDown
          size={18}
          className={cn(
            "text-[#C9A227] shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={id}
        role="region"
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p className="px-5 pb-4 text-sm text-[#8A8A95] leading-relaxed" itemProp="text">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#8A8A95]">
            Everything you need to know about booking and using M1 Car Lift.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
