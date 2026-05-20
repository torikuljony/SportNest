import {
  Zap,
  BadgeCheck,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Instant Booking",
    description:
      "Real-time availability and immediate confirmation. No phone calls, no waiting.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Verified Venues",
    description:
      "Every facility is strictly vetted for quality, maintenance, and safety standards.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "Integrated encrypted payments with split-cost options for team bookings.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Dedicated concierge support for all your booking queries and facility access.",
    icon: Headphones,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#050505] py-24 px-6 lg:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white text-4xl font-bold mb-5">
            Built for Athletes & Professionals
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Experience a platform that understands the urgency of peak
            performance and the value of your time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-[#071120] border border-[#13203A] rounded-[24px] p-8 hover:border-[#39FF14]/40 transition-all duration-300"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#0D2B12] border border-[#39FF14]/20 flex items-center justify-center mb-8">
                  <Icon
                    size={28}
                    className="text-[#39FF14]"
                    strokeWidth={2.2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-7 text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}