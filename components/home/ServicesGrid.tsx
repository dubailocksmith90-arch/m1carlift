import Link from "next/link";
import { Calendar, Car, Briefcase, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Daily Commute Pass",
    description:
      "Lock in a regular morning/evening slot between Sharjah and Dubai. Monthly passes available for consistent, worry-free commuting.",
    href: "/services#daily-commute",
    tag: "Most Popular",
  },
  {
    icon: Car,
    title: "One-Time Booking",
    description:
      "Need a single ride on a specific date? Book a one-time car lift to any major Dubai destination at a transparent, fixed fare.",
    href: "/services#one-time",
    tag: null,
  },
  {
    icon: Briefcase,
    title: "Corporate Accounts",
    description:
      "Regular transport for your team? We offer corporate car lift packages for companies based in Sharjah with employees commuting to Dubai.",
    href: "/services#corporate",
    tag: "For Teams",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4">
          Car Lift Services Built for UAE Commuters
        </h2>
        <p className="text-[#8A8A95] max-w-2xl mx-auto text-base">
          Whether you commute daily or need a one-off ride, M1 Car Lift has a service option that fits your schedule and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-[#151517] rounded-2xl p-6 border border-[#2A2A2E] hover:border-[#C9A227]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.1)]"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-xs bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30 px-2 py-0.5 rounded-full font-medium">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#1E1E21] border border-[#2A2A2E] group-hover:border-[#C9A227]/40 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={22} className="text-[#C9A227]" />
              </div>
              <h3 className="text-lg font-bold text-[#EDEDED] mb-2">{service.title}</h3>
              <p className="text-[#8A8A95] text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex items-center gap-1 text-[#C9A227] text-sm font-medium">
                Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link href="/services" className="text-[#C9A227] hover:text-[#E8C04A] text-sm font-medium underline underline-offset-4 transition-colors">
          View all services and pricing →
        </Link>
      </div>
    </section>
  );
}
