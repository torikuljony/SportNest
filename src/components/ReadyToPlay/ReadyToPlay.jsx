export default function ReadyToPlay() {
  return (
    <section className="bg-[#050505] px-6 lg:px-14 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[34px] border border-[#16311D] bg-[#071120] px-8 py-20 text-center">
          {/* Glow Effects */}
          <div className="absolute top-[-80px] right-[-60px] w-[250px] h-[250px] bg-[#39FF14]/20 blur-[120px]" />

          <div className="absolute bottom-[-80px] left-[-60px] w-[250px] h-[250px] bg-[#39FF14]/10 blur-[120px]" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Ready to{" "}
              <span className="text-[#39FF14]">
                Play?
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
              Join thousands of athletes who are already booking their favorite
              venues through SportNest.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="bg-[#39FF14] hover:bg-[#2fe012] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300">
                Get Started Now
              </button>

              <button className="border border-[#2A3245] hover:border-[#39FF14] text-gray-300 hover:text-[#39FF14] px-8 py-4 rounded-full transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}