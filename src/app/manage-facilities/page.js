import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ManageFacilitiesPage() {
  const facilities = [
    {
      name: "Apex Football Arena",
      type: "Football",
      location: "Dhaka, Bangladesh",
      price: "$50/hr",
      bookings: 142,
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Titan Basketball Court",
      type: "Basketball",
      location: "Chittagong, Bangladesh",
      price: "$35/hr",
      bookings: 98,
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Neon Tennis Club",
      type: "Tennis",
      location: "Sylhet, Bangladesh",
      price: "$40/hr",
      bookings: 76,
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050505] px-6 lg:px-10 py-32">
        
        <div className="max-w-7xl mx-auto">
          
          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            
            <div>
              <p className="text-[#39FF14] uppercase tracking-[5px] text-sm font-semibold mb-5">
                Facility Dashboard
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6">
                Manage Your
                <span className="text-[#39FF14]">
                  {" "}Facilities
                </span>
              </h1>

              <p className="text-gray-400 text-lg max-w-2xl leading-8">
                Update, monitor, and optimize your premium sports venues
                from one powerful dashboard.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-5">
              
              <div className="bg-[#071120] border border-[#11203A] rounded-3xl px-8 py-6">
                <h3 className="text-[#39FF14] text-4xl font-black mb-2">
                  12
                </h3>

                <p className="text-gray-400 text-sm">
                  Total Facilities
                </p>
              </div>

              <div className="bg-[#071120] border border-[#11203A] rounded-3xl px-8 py-6">
                <h3 className="text-[#39FF14] text-4xl font-black mb-2">
                  316
                </h3>

                <p className="text-gray-400 text-sm">
                  Total Bookings
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-[#071120] border border-[#11203A] rounded-[30px] overflow-hidden hover:border-[#39FF14]/40 transition duration-500 hover:-translate-y-2"
              >
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  
                  <img
                    src={facility.image}
                    alt=""
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute top-5 left-5 bg-[#39FF14] text-black text-xs font-black px-4 py-2 rounded-full">
                    {facility.type}
                  </span>

                  <div className="absolute bottom-5 left-5">
                    
                    <h2 className="text-white text-3xl font-black mb-2">
                      {facility.name}
                    </h2>

                    <p className="text-gray-300 text-sm">
                      📍 {facility.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-8">
                    
                    <div>
                      <p className="text-gray-500 text-sm mb-1">
                        Price Per Hour
                      </p>

                      <h3 className="text-[#39FF14] text-3xl font-black">
                        {facility.price}
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500 text-sm mb-1">
                        Bookings
                      </p>

                      <h3 className="text-white text-3xl font-black">
                        {facility.bookings}
                      </h3>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    
                    <button className="flex-1 bg-[#39FF14] hover:bg-[#2ee60f] text-black py-4 rounded-2xl font-black transition shadow-[0_0_20px_rgba(57,255,20,0.25)]">
                      Update
                    </button>

                    <button className="flex-1 border border-red-500 text-red-500 py-4 rounded-2xl font-black hover:bg-red-500 hover:text-white transition">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}