"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { auth } from "@/firebase/firebase.config";

export default function FacilityDetailsPage() {

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [players, setPlayers] = useState("");

  const handleBooking = async () => {

    if (!auth.currentUser) {

      alert("Please Login First ❌");

      return;
    }

    const bookingData = {

      facilityName: "Emerald Turf Pitch",

      facilityImage:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",

      userName: auth.currentUser.displayName,

      userEmail: auth.currentUser.email,

      date,

      time,

      players,

      price: "$60",

      createdAt: new Date(),
    };

    try {

      const res = await fetch("/api/bookings", {

        method: "POST",

        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data.success) {

        alert("Booking Success ✅");

        setDate("");
        setTime("");
        setPlayers("");

      } else {

        alert("Booking Failed ❌");
      }

    } catch (error) {

      console.log(error);

      alert("Something Went Wrong ❌");
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#050505] min-h-screen text-white pt-28 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Top Grid */}
          <div className="grid lg:grid-cols-[1.6fr_.8fr] gap-8">

            {/* Left Side */}
            <div>

              {/* Main Image */}
              <div className="relative rounded-[30px] overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop"
                  alt="facility"
                  className="w-full h-[500px] object-cover"
                />

                <div className="absolute top-6 left-6 bg-[#39FF14] text-black text-xs font-bold px-4 py-2 rounded-full">
                  SOCCER
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                  <h1 className="text-5xl font-bold mb-3">
                    Emerald Turf Pitch
                  </h1>

                  <p className="text-gray-300 text-lg">
                    West Valley Sports Park
                  </p>
                </div>
              </div>

              {/* About */}
              <div className="bg-[#071120] border border-[#1F2937] rounded-[28px] p-8 mb-8">
                <h2 className="text-3xl font-bold mb-5">
                  About Facility
                </h2>

                <p className="text-gray-400 leading-8 text-lg">
                  Experience elite-level football on our FIFA-standard turf
                  designed for professional athletes and passionate players.
                  Enjoy premium lighting, modern locker rooms, spectator seating,
                  and world-class maintenance for every match and training
                  session.
                </p>
              </div>

              {/* Amenities */}
              <div className="bg-[#071120] border border-[#1F2937] rounded-[28px] p-8">
                <h2 className="text-3xl font-bold mb-8">
                  Amenities
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                  <div className="bg-[#0B1628] border border-[#1F2937] rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-3">🚿</p>
                    <p className="text-gray-300">Shower Room</p>
                  </div>

                  <div className="bg-[#0B1628] border border-[#1F2937] rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-3">💡</p>
                    <p className="text-gray-300">Night Lighting</p>
                  </div>

                  <div className="bg-[#0B1628] border border-[#1F2937] rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-3">🚗</p>
                    <p className="text-gray-300">Parking Area</p>
                  </div>

                  <div className="bg-[#0B1628] border border-[#1F2937] rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-3">🥤</p>
                    <p className="text-gray-300">Refreshments</p>
                  </div>

                  <div className="bg-[#0B1628] border border-[#1F2937] rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-3">🧑‍⚕️</p>
                    <p className="text-gray-300">Medical Support</p>
                  </div>

                  <div className="bg-[#0B1628] border border-[#1F2937] rounded-2xl p-5 text-center">
                    <p className="text-3xl mb-3">📶</p>
                    <p className="text-gray-300">Free WiFi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>

              {/* Booking Card */}
              <div className="sticky top-32 bg-[#071120] border border-[#1F2937] rounded-[28px] p-8">

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-5xl font-bold text-white">
                      $60
                    </span>

                    <span className="text-gray-400 text-lg">
                      {" "}
                      / hour
                    </span>
                  </div>

                  <div className="bg-[#39FF14]/10 border border-[#39FF14]/30 px-4 py-2 rounded-full text-[#39FF14] font-semibold">
                    ★ 5.0
                  </div>
                </div>

                {/* Booking Info */}
                <div className="space-y-5 mb-8">

                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      Select Date
                    </p>

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#0B1628] border border-[#1F2937] rounded-2xl px-5 py-4 text-gray-300 outline-none"
                    />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      Time Slot
                    </p>

                    <input
                      type="text"
                      placeholder="7PM - 9PM"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#0B1628] border border-[#1F2937] rounded-2xl px-5 py-4 text-gray-300 outline-none"
                    />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      Players
                    </p>

                    <input
                      type="number"
                      placeholder="10"
                      value={players}
                      onChange={(e) => setPlayers(e.target.value)}
                      className="w-full bg-[#0B1628] border border-[#1F2937] rounded-2xl px-5 py-4 text-gray-300 outline-none"
                    />
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={handleBooking}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee60f] text-black py-4 rounded-2xl font-bold text-lg transition"
                >
                  Book Facility
                </button>

                {/* Extra */}
                <div className="mt-8 border-t border-[#1F2937] pt-6 space-y-4">

                  <div className="flex justify-between text-gray-400">
                    <span>Operating Hours</span>
                    <span className="text-white">
                      6 AM - 12 AM
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Availability</span>
                    <span className="text-[#39FF14]">
                      Open Today
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Surface</span>
                    <span className="text-white">
                      Premium Turf
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Facilities */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-10">
              Similar Facilities
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#071120] border border-[#1F2937] rounded-[24px] overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
                    alt="facility"
                    className="w-full h-[220px] object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Neon Pro Hoop
                    </h3>

                    <p className="text-gray-400 mb-5">
                      Eastside Sport Plaza
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#39FF14] text-2xl font-bold">
                        $35/hr
                      </span>

                      <button className="bg-[#39FF14] text-black px-5 py-2 rounded-xl font-semibold">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}