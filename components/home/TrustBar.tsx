import { Star, Users, Shield, Clock } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "5.0",
    label: "Google Rating",
    sub: "47+ reviews",
  },
  {
    icon: Users,
    // PLACEHOLDER: confirm actual commuter count with client
    value: "200+",
    label: "Daily Commuters",
    sub: "Sharjah ↔ Dubai",
  },
  {
    icon: Clock,
    value: "6 Days",
    label: "Per Week",
    sub: "Mon – Sat",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Insured Rides",
    sub: "Licensed drivers",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="bg-[#151517] border-y border-[#2A2A2E] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#1E1E21] border border-[#C9A227]/30 flex items-center justify-center">
                  <Icon size={18} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#EDEDED]">{stat.value}</p>
                  <p className="text-sm font-medium text-[#EDEDED]">{stat.label}</p>
                  <p className="text-xs text-[#8A8A95]">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
