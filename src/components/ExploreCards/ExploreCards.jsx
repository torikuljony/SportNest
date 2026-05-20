import Link from "next/link";

export default function ExploreCards() {
  const sports = [
    {
      category: "TENNIS",
      title: "Apex Center Court",
      location: "Downtown Athletics Hub",
      price: "$45",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "BASKETBALL",
      title: "Neon Pro Hoop",
      location: "Eastside Sport Plaza",
      price: "$35",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "SOCCER",
      title: "Emerald Turf Pitch",
      location: "West Valley Sports Park",
      price: "$60",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "GYM",
      title: "Iron Lab Fitness",
      location: "Metropolis Financial Dist.",
      price: "$20",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "PADEL",
      title: "Velocity Padel Club",
      location: "The Docklands Complex",
      price: "$40",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "SWIMMING",
      title: "Aquatic Zenith Pool",
      location: "North Shore Marina",
      price: "$25",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "TENNIS",
      title: "The Volley Lab",
      location: "Uptown Athletic Club",
      price: "$50",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
    },

    {
      category: "GYM",
      title: "Titan Strength Hub",
      location: "Industrial District Labs",
      price: "$15",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#050505] min-h-screen px-6 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-10">
          Discover Elite Facilities
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-14">
          {[
            "All Sports",
            "Tennis",
            "Basketball",
            "Soccer",
            "Swimming",
            "Gym",
            "Padel",
          ].map((item, index) => (
            <button
              key={index}
              className={`px-5 py-3 rounded-full border text-sm font-medium transition ${
                index === 0
                  ? "bg-[#39FF14] text-black border-[#39FF14]"
                  : "bg-[#081120] text-gray-300 border-[#1F2937] hover:border-[#39FF14]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {sports.map((sport, index) => (
            <Link
              href="/facility-details"
              key={index}
              className="bg-[#071120] border border-[#11203A] rounded-[22px] overflow-hidden hover:border-[#39FF14]/50 transition block"
            >
              
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-[#39FF14] text-black text-[10px] font-bold px-3 py-1 rounded-full">
                  {sport.category}
                </span>

                {/* Heart */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white text-sm">
                  ♡
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-white text-2xl font-semibold leading-tight">
                    {sport.title}
                  </h3>

                  <span className="text-[#39FF14] text-sm font-bold whitespace-nowrap">
                    ★ {sport.rating}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  ⌖ {sport.location}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white text-3xl font-bold">
                      {sport.price}
                    </span>

                    <span className="text-gray-500 text-sm"> /hr</span>
                  </div>

                  <button className="bg-[#39FF14] hover:bg-[#2ee60f] text-black font-semibold px-5 py-2 rounded-xl text-sm transition">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="flex flex-col items-center mt-16">
          <button className="px-10 py-4 rounded-full border border-[#1F2937] bg-[#071120] text-white hover:border-[#39FF14] transition">
            Load More Facilities
          </button>

          <p className="text-gray-500 text-sm mt-6">
            Showing 8 of 142 elite facilities near you
          </p>
        </div>
      </div>
    </section>
  );
}