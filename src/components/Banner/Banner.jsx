"use client";

import { useRouter } from "next/navigation";

export default function Banner() {

  const router = useRouter();

  return (
    <section className="bg-[#070B14] text-white min-h-screen flex items-center px-6 lg:px-20 overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute -top-25 -left-25 w-75 h-75 bg-green-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute -bottom-25 -right-25 w-75 h-75 bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-green-400 uppercase tracking-[5px] text-sm mb-5 drop-shadow-[0_0_18px_rgba(74,222,128,0.95)]">
            Sports Arena
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unleash{" "}

            <span className="text-green-500 drop-shadow-[0_0_25px_rgba(#00FF29)]">
              Your Game
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
            Access world-class facilities and high-performance venues
            at the touch of a button. Whether it's a casual match or elite
            training, SportNest connects you to the best courts in the
            city.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={() =>
                router.push("/explore")
              }
              className="bg-green-400 hover:bg-green-500 hover:shadow-[0_0_35px_rgba(74,222,128,0.9)] hover:scale-105 text-black font-semibold px-7 py-3 rounded-full transition-all duration-300"
            >
              Explore Facilities
            </button>

            <button className="border border-gray-700 hover:border-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] px-7 py-3 rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-12">

            <div>

              <h2 className="text-3xl font-bold text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.95)]">
                500+
              </h2>

              <p className="text-gray-500 mt-1">
                Active Players
              </p>
            </div>

            <div>

              <h2 className="text-3xl font-bold text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.95)]">
                120+
              </h2>

              <p className="text-gray-500 mt-1">
                Sports Venues
              </p>
            </div>

            <div>

              <h2 className="text-3xl font-bold text-green-500 drop-shadow-[0_0_20px_rgba(74,222,128,0.95)]">
                24/7
              </h2>

              <p className="text-gray-500 mt-1">
                Instant Booking
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

         

          {/* Main Image */}
          <img
            src="/image.es.png"
            alt="Sports Arena"
            className="w-full max-w-xl h-100 object-cover rounded-3xl border border-gray-900 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-[0_0_40px_rgba(74,222,128)]"
          />

          {/* Floating Glass Card */}
          <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-5 py-4 shadow-xl">

            <p className="text-sm text-gray-200">
              Top Rated Arena
            </p>

            <h3 className="text-lg font-bold mt-1">
              Elite Football Turf
            </h3>

            <p className="text-green-400 text-sm mt-1 drop-shadow-[#00FF29]">
              Available Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}