const sportsData = [
  {
    id: 1,
    title: "The Grand Slam Center",
    location: "Central Park, New York",
    price: "$45",
    rating: "4.9",
    category: "Premium",
    image:
     "/image.2.png" 
  },
  {
    id: 2,
    title: "Apex Basketball Arena",
    location: "Downtown Brooklyn, NY",
    price: "$60",
    rating: "4.7",
    category: "Indoor",
    image:
     "/image.3.png" 
  },
  {
    id: 3,
    title: "Aquatic Center Elite",
    location: "Greenwich, CT",
    price: "$30",
    rating: "4.8",
    category: "Swimming",
    image:
      "/image.4.png" 
  },
];

export default function PopularSports() {
  return (
    <section className="bg-[#050505] py-20 px-6 lg:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <h2 className="text-white text-[38px] font-bold tracking-[-1px]">
            Popular Sports
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {[
              "All Sports",
              "Tennis",
              "Basketball",
              "Football",
              "Padel",
              "Swimming",
            ].map((item, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm border transition-all duration-300 ${
                  index === 0
                    ? "bg-[#0F1F0F] border-[#39FF14] text-[#39FF14]"
                    : "bg-[#151515] border-[#2A2A2A] text-gray-300 hover:border-[#39FF14] hover:text-[#39FF14]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {sportsData.map((sport) => (
            <div
              key={sport.id}
              className="rounded-[22px] overflow-hidden border border-[#16233D] bg-[#071120] group"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#39FF14] text-black text-[11px] font-semibold px-3 py-[6px] rounded-full">
                    {sport.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Top */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white text-[31px] leading-[38px] font-semibold">
                      {sport.title}
                    </h3>

                    <p className="text-[#A1A1AA] text-sm mt-2 flex items-center gap-1">
                      <span>⌖</span>
                      {sport.location}
                    </p>
                  </div>

                  <div className="text-[#39FF14] text-sm font-semibold flex items-center gap-1">
                    ★ {sport.rating}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#1A2B45] my-5"></div>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#6B7280] text-[10px] uppercase tracking-[1px] mb-1">
                      Starting From
                    </p>

                    <h4 className="text-[#39FF14] text-[34px] font-bold leading-none">
                      {sport.price}
                      <span className="text-gray-400 text-base font-medium">
                        /hr
                      </span>
                    </h4>
                  </div>

                  <button className="bg-[#0D2B12] hover:bg-[#123918] text-[#39FF14] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}