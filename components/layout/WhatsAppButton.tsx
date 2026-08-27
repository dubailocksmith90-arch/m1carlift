"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with M1 Car Lift on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-all duration-300 animate-pulse-gold"
    >
      <MessageCircle size={26} className="text-white fill-white" strokeWidth={1.5} />
    </a>
  );
}
