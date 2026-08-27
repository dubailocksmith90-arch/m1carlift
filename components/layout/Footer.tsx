import Link from "next/link";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import MapEmbed from "@/components/ui/MapEmbed";

const footerNav = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#daily-commute", label: "Daily Commute Pass" },
    { href: "/services#one-time", label: "One-Time Booking" },
    { href: "/services#corporate", label: "Corporate Accounts" },
    { href: "/services#routes", label: "Route Coverage" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151517] border-t border-[#2A2A2E]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#C9A227] flex items-center justify-center font-bold text-[#0A0A0B] text-sm">
                M1
              </div>
              <span className="font-bold text-lg text-[#EDEDED] tracking-tight">Car Lift</span>
            </Link>
            <p className="text-[#8A8A95] text-sm leading-relaxed mb-6">
              Daily car lift service between Sharjah and Dubai. Punctual, comfortable, and affordable commutes since day one.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-[#8A8A95] hover:text-[#C9A227] transition-colors">
                <Phone size={14} className="text-[#C9A227]" />
                {BUSINESS.phone}
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8A8A95] hover:text-[#C9A227] transition-colors">
                <MessageCircle size={14} className="text-[#C9A227]" />
                WhatsApp Us
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-[#8A8A95] hover:text-[#C9A227] transition-colors">
                <Mail size={14} className="text-[#C9A227]" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2 text-[#8A8A95]">
                <Clock size={14} className="text-[#C9A227] mt-0.5 shrink-0" />
                <span>{BUSINESS.hours}</span>
              </div>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#8A8A95] hover:text-[#C9A227] transition-colors group"
                aria-label="Open M1 Car Lift location in Google Maps"
              >
                <MapPin size={14} className="text-[#C9A227] mt-0.5 shrink-0" />
                <span>
                  {BUSINESS.address}
                  <span className="block text-xs text-[#C9A227]/70 group-hover:text-[#C9A227] font-mono mt-0.5 transition-colors">
                    {BUSINESS.plusCode}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#EDEDED] font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {footerNav.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#8A8A95] hover:text-[#C9A227] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#EDEDED] font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#8A8A95] hover:text-[#C9A227] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Embed */}
          <div>
            <h3 className="text-[#EDEDED] font-semibold text-sm uppercase tracking-wider mb-4">Find Us</h3>
            <MapEmbed variant="compact" className="h-40 w-full" />
            <p className="text-[#8A8A95] text-xs mt-2">
              Serving: Sharjah ↔ Dubai daily
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8A8A95]">
          <p>© {currentYear} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#C9A227] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
