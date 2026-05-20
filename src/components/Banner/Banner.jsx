export default function Banner() {
  return (
    <section className="bg-[#070B14] text-white min-h-screen flex items-center px-6 lg:px-20 overflow-hidden relative">
      
      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-green-400 uppercase tracking-[5px] text-sm mb-5">
            Sports Arena
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unleash {" "}
            <span className="text-green-400">Your Game</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
            Access world-class facilities and high-performance venues
            at the touch of a button. Whether it's a casual match or elite
            training, SportNest connects you to the best courts in the
            city.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-7 py-3 rounded-full transition duration-300">
              Explore Facilities
            </button>

            <button className="border border-gray-700 hover:border-green-400 hover:text-green-400 px-7 py-3 rounded-full transition duration-300">
              Learn More
            </button>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-green-400">500+</h2>
              <p className="text-gray-500 mt-1">Active Players</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-400">120+</h2>
              <p className="text-gray-500 mt-1">Sports Venues</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-400">24/7</h2>
              <p className="text-gray-500 mt-1">Instant Booking</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>

          {/* Main Image */}
          <img
            src="/image.1.png" 
            alt="Sports Arena"
            className="w-full max-w-xl h-[500px] object-cover rounded-3xl border border-gray-800 shadow-2xl"
          />

          {/* Floating Glass Card */}
          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-sm text-gray-300">
              Top Rated Arena
            </p>

            <h3 className="text-lg font-bold mt-1">
              Elite Football Turf
            </h3>

            <p className="text-green-400 text-sm mt-1">
              Available Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}