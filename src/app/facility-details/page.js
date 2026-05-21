"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { auth } from "@/firebase/firebase.config";

// মূল কনটেন্ট আলাদা কম্পোনেন্টে নিয়ে আসা হলো
function FacilityDetailsContent() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "Emerald Turf Pitch";
  const location = searchParams.get("location") || "West Valley Sports Park";
  const price = searchParams.get("price") || "$60";
  const rating = searchParams.get("rating") || "5.0";
  const category = searchParams.get("category") || "SOCCER";
  const image = searchParams.get("image") || "/image.22.png";

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [players, setPlayers] = useState("");

  const handleBooking = async () => {
    if (!auth.currentUser) {
      alert("Please Login First ❌");
      return;
    }

    const bookingData = {
      facilityName: title,
      facilityImage: image,
      userName: auth.currentUser.displayName,
      userEmail: auth.currentUser.email,
      date,
      time,
      players,
      price,
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
    <main className="bg-[#050505] min-h-screen text-white pt-28 pb-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.6fr_.8fr] gap-8">
          {/* LEFT */}
          <div>
            <div className="relative rounded-[30px] overflow-hidden mb-8">
              <img src={image} alt="facility" className="w-full h-125 object-cover" />
              <div className="absolute top-6 left-6 bg-[#39FF14] text-black text-xs font-bold px-4 py-2 rounded-full">
                {category}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black to-transparent p-8">
                <h1 className="text-5xl font-bold mb-3">{title}</h1>
                <p className="text-gray-300 text-lg">{location}</p>
              </div>
            </div>

            {/* ABOUT */}
            <div className="bg-[#071120] border border-[#1F2937] rounded-[28px] p-8 mb-8">
              <h2 className="text-3xl font-bold mb-5">About Facility</h2>
              <p className="text-gray-400 leading-8 text-lg">
                Experience elite-level sports facilities with premium quality environment, professional setup, modern amenities and world-class maintenance.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="sticky top-32 bg-[#071120] border border-[#1F2937] rounded-[28px] p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-5xl font-bold text-white">{price}</span>
                  <span className="text-gray-400 text-lg"> / hour</span>
                </div>
                <div className="bg-[#39FF14]/10 border border-[#39FF14]/30 px-4 py-2 rounded-full text-[#39FF14] font-semibold">
                  ★ {rating}
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#0B1628] border border-[#1F2937] rounded-2xl px-5 py-4"
                />
                <input
                  type="text"
                  placeholder="7PM - 9PM"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#0B1628] border border-[#1F2937] rounded-2xl px-5 py-4"
                />
                <input
                  type="number"
                  placeholder="10"
                  value={players}
                  onChange={(e) => setPlayers(e.target.value)}
                  className="w-full bg-[#0B1628] border border-[#1F2937] rounded-2xl px-5 py-4"
                />
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-[#39FF14] hover:bg-[#2ee60f] text-black py-4 rounded-2xl font-bold text-lg transition"
              >
                Book Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// মূল এক্সপোর্ট করা পেজ যাতে Suspense দিয়ে র‍্যাপ করা থাকে
export default function FacilityDetailsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-white text-center pt-40">Loading Details...</div>}>
        <FacilityDetailsContent />
      </Suspense>
      <Footer />
    </>
  );
}