const reviews = [
  {
    id: 1,
    text: "Incredible speed. Booked a tennis court in under 30 seconds.",
  },
  {
    id: 2,
    text: "Best sports SaaS out there. Clean UI and great venues.",
  },
  {
    id: 3,
    text: "The venue descriptions and images are 100% accurate.",
  },
  {
    id: 4,
    text: "The customer support resolved my booking issue instantly.",
  },
];

export default function CommunitySection() {
  return (
    <section className="bg-[#050505] px-6 lg:px-14 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Large Review */}
          <div>
            {/* Heading */}
            <h2 className="text-white text-4xl font-bold leading-tight mb-10">
              What Our Community <br />
              <span className="text-[#39FF14]">Is Saying</span>
            </h2>

            {/* Big Card */}
            <div className="bg-[#071120] border border-[#13203A] rounded-[24px] p-8">
              {/* Quotes */}
              <div className="text-[#39FF14] text-5xl leading-none mb-5">
                “
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-8 text-[17px] italic mb-8">
                SportNest has completely changed how our amateur league manages
                court bookings. The interface is lightning fast, and the quality
                of venues we find here is consistently superior to anything else
                on the market.
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src="/image.5.png" 
                  alt="user"
                  className="w-14 h-14 rounded-full border-2 border-[#39FF14] object-cover"
                />

                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Marcus Rivera
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Pro League Coordinator
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Small Reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20 lg:mt-28">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#071120] border border-[#13203A] rounded-[20px] p-5"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-[#39FF14] text-sm"
                      >
                        ★
                      </span>
                    ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-7">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}