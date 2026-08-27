import Image from "next/image";
import Link from "next/link";

const vehicles = [
  {
    src: "/images/coaster-hero.webp",
    width: 663,
    height: 553,
    alt: "M1 Car Lift Toyota Coaster bus used for Sharjah to Dubai group commute",
    tag: "Group & Corporate",
    name: "Toyota Coaster",
    desc: "Scheduled daily routes · Corporate accounts · Air-conditioned comfort",
    featured: true,
  },
  {
    src: "/images/hiace-van.webp",
    width: 663,
    height: 553,
    alt: "M1 Car Lift Toyota HiAce van for Sharjah to Dubai daily car lift service",
    tag: "Daily Commute",
    name: "Toyota HiAce",
    desc: "Regular morning & evening slots · Consistent driver · Monthly passes",
    featured: false,
  },
  {
    src: "/images/fleet-overview.webp",
    width: 663,
    height: 474,
    alt: "M1 Car Lift fleet of vans and buses serving the Sharjah–Dubai corridor",
    tag: "Our Fleet",
    name: "Full Fleet Coverage",
    desc: "Multiple vehicles serving all Sharjah pick-up zones to Dubai daily",
    featured: false,
  },
];

export default function FleetSection() {
  return (
    <section
      aria-labelledby="fleet-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">Our Fleet</p>
            <h2 id="fleet-heading" className="text-3xl md:text-4xl font-bold text-[#EDEDED]">
              Comfortable Vehicles for Every Commuter
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[#C9A227] hover:text-[#E8C04A] text-sm font-medium whitespace-nowrap underline underline-offset-4 transition-colors"
          >
            View all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Featured vehicle — Coaster */}
          {vehicles.filter((v) => v.featured).map((v) => (
            <div
              key={v.name}
              className="relative rounded-2xl overflow-hidden group border border-[#2A2A2E] hover:border-[#C9A227]/30 transition-colors duration-300"
            >
              <Image
                src={v.src}
                alt={v.alt}
                width={v.width}
                height={v.height}
                className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/30 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs text-[#C9A227] font-semibold uppercase tracking-widest bg-[#C9A227]/10 border border-[#C9A227]/25 px-2.5 py-1 rounded-full mb-2">
                  {v.tag}
                </span>
                <h3 className="text-[#EDEDED] font-bold text-xl mb-1">{v.name}</h3>
                <p className="text-[#8A8A95] text-sm">{v.desc}</p>
              </div>
            </div>
          ))}

          {/* Secondary vehicles stacked */}
          <div className="flex flex-col gap-4">
            {vehicles.filter((v) => !v.featured).map((v) => (
              <div
                key={v.name}
                className="relative rounded-2xl overflow-hidden group border border-[#2A2A2E] hover:border-[#C9A227]/30 transition-colors duration-300 flex-1"
              >
                <Image
                  src={v.src}
                  alt={v.alt}
                  width={v.width}
                  height={v.height}
                  className="w-full h-44 object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block text-xs text-[#C9A227] font-semibold uppercase tracking-widest bg-[#C9A227]/10 border border-[#C9A227]/25 px-2.5 py-1 rounded-full mb-1.5">
                    {v.tag}
                  </span>
                  <h3 className="text-[#EDEDED] font-bold text-base mb-0.5">{v.name}</h3>
                  <p className="text-[#8A8A95] text-xs">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
