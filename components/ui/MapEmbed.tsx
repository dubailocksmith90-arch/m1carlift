import { ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface MapEmbedProps {
  /** "compact" for footer thumbnail, "full" for contact page feature */
  variant?: "compact" | "full";
  className?: string;
}

export default function MapEmbed({ variant = "full", className }: MapEmbedProps) {
  const isCompact = variant === "compact";

  return (
    <div className={cn("relative group rounded-xl overflow-hidden border border-[#2A2A2E]", className)}>
      <iframe
        src={BUSINESS.mapsEmbed}
        title="M1 Car Lift location on Google Maps"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full block"
        style={{
          filter: "invert(90%) hue-rotate(180deg) saturate(0.85) brightness(0.9)",
          colorScheme: "normal",
        }}
      />
      {/* "Open in Maps" overlay — appears on hover */}
      <a
        href={BUSINESS.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open M1 Car Lift in Google Maps"
        className={cn(
          "absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200",
          "bg-gradient-to-t from-[#0A0A0B]/70 via-transparent to-transparent",
          "p-3"
        )}
      >
        <span className="inline-flex items-center gap-1.5 bg-[#C9A227] text-[#0A0A0B] font-semibold rounded-lg px-3 py-1.5 text-xs shadow-lg">
          <ExternalLink size={12} />
          Open in Maps
        </span>
      </a>
    </div>
  );
}
