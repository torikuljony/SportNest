"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import {
  FaClock,
  FaEdit,
  FaTrash,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

import {
  MdOutlineSportsTennis,
} from "react-icons/md";

import {
  HiOutlineFilter,
  HiOutlineSortDescending,
  HiOutlineEye,
} from "react-icons/hi";

export default function ManageFacilitiesPage() {

  const facilities = [

    {
      id: 1,
      title: "Elite Padel Center",
      location: "Downtown District, Block A",
      image:
        "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1200&auto=format&fit=crop",
      status: "Active",
      courts: "6 Courts",
      time: "06:00 - 23:00",
      bookings: "12/14",
      button: "Analytics",
      green: true,
    },

    {
      id: 2,
      title: "Urban Hoop Arena",
      location: "Northside Industrial Park",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
      status: "Draft",
      courts: "2 Full Courts",
      time: "Completing Profile",
      bookings: "Oct 24",
      button: "Go Live",
      green: false,
    },

    {
      id: 3,
      title: "Victory Turf Club",
      location: "Riverside Sports Complex",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
      status: "Maintenance",
      courts: "5-a-side Pitch",
      time: "Turf Resurfacing",
      bookings: "Aug 18",
      button: "Analytics",
      green: true,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-black min-h-screen px-6 lg:px-10 py-28 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

            <div>
              <h1 className="text-[#39FF14] text-5xl font-black mb-3">
                Manage Facilities
              </h1>

              <p className="text-gray-400 text-lg">
                Optimization and oversight of your active venues.
              </p>
            </div>

            <div className="flex items-center gap-5">

              <div className="bg-[#111111] border border-[#232323] rounded-full px-6 py-4 flex items-center gap-3 w-[320px]">

                <span className="text-gray-500">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search facilities..."
                  className="bg-transparent outline-none text-sm text-white w-full"
                />
              </div>

            
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-7 mb-16">

            {/* Revenue */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

              <div className="absolute -top-10 -left-10 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-8">

                  <FaChartLine className="text-[#39FF14] text-xl" />
                </div>

                <p className="text-gray-500 uppercase tracking-[2px] text-sm mb-4">
                  Monthly Revenue
                </p>

                <h2 className="text-white text-6xl font-black mb-6">
                  $42,850
                </h2>

                <div className="h-[6px] bg-[#1F2937] rounded-full overflow-hidden">

                  <div className="w-[72%] h-full bg-[#39FF14]" />
                </div>
              </div>
            </div>

            {/* Views */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

              <div className="absolute -bottom-10 -right-10 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-8">

                  <HiOutlineEye className="text-[#39FF14] text-2xl" />
                </div>

                <p className="text-gray-500 uppercase tracking-[2px] text-sm mb-4">
                  Profile Views
                </p>

                <h2 className="text-white text-6xl font-black mb-5">
                  18.4K
                </h2>

                <p className="text-gray-400 text-sm">
                  8.2% more than last month
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-8">

                  <FaStar className="text-[#39FF14] text-xl" />
                </div>

                <p className="text-gray-500 uppercase tracking-[2px] text-sm mb-4">
                  Avg. Member Rating
                </p>

                <h2 className="text-white text-6xl font-black mb-5">
                  4.9
                </h2>

                <div className="flex gap-1 text-[#39FF14]">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>

          {/* Top */}
          <div className="flex items-center justify-between mb-8">

            <h2 className="text-white text-4xl font-black">
              Your Facilities
            </h2>

            <div className="flex items-center gap-4">

              <button className="bg-[#151515] border border-[#1F2937] px-5 py-3 rounded-xl text-white flex items-center gap-2">
                <HiOutlineFilter />
                Filter
              </button>

              <button className="bg-[#151515] border border-[#1F2937] px-5 py-3 rounded-xl text-white flex items-center gap-2">
                <HiOutlineSortDescending />
                Sort
              </button>
            </div>
          </div>

          {/* Facility Cards */}
          <div className="space-y-8 mb-16">

            {facilities.map((item) => (

              <div
                key={item.id}
                className="relative overflow-hidden rounded-[32px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B]"
              >

                <div className="absolute -top-20 -left-20 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

                <div className="absolute -bottom-20 -right-20 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

                <div className="grid lg:grid-cols-[320px_1fr_280px]">

                  {/* Image */}
                  <div className="relative">

                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full min-h-[260px] object-cover"
                    />

                    <div className="absolute top-5 left-5">

                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold ${
                          item.status === "Active"
                            ? "bg-[#39FF14] text-black"
                            : item.status === "Draft"
                            ? "bg-gray-600 text-white"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">

                    <div>

                      <div className="flex items-start justify-between gap-5 mb-6">

                        <div>

                          <h3 className="text-white text-4xl font-black mb-3">
                            {item.title}
                          </h3>

                          <p className="text-gray-400">
                            ⌖ {item.location}
                          </p>
                        </div>

                        <div className="text-right">

                          <p className="text-gray-500 text-sm uppercase mb-2">
                            BOOKINGS TODAY
                          </p>

                          <h3 className="text-[#39FF14] text-5xl font-black">
                            {item.bookings}
                          </h3>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-4">

                        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 flex items-center gap-3 text-gray-300">

                          <MdOutlineSportsTennis className="text-[#39FF14]" />

                          {item.courts}
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 flex items-center gap-3 text-gray-300">

                          <FaClock className="text-[#39FF14]" />

                          {item.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-8 flex flex-col justify-center gap-5">

                    <button
                      className={`w-full py-4 rounded-2xl font-bold transition ${
                        item.green
                          ? "bg-[#39FF14]/20 border border-[#39FF14]/30 text-[#39FF14]"
                          : "bg-[#39FF14] text-black"
                      }`}
                    >
                      {item.button}
                    </button>

                    <button className="w-full py-4 rounded-2xl border border-[#2A2A2A] text-white flex items-center justify-center gap-3">

                      <FaEdit />

                      Edit
                    </button>

                    <button className="w-full py-4 rounded-2xl border border-red-500/40 text-red-500 flex items-center justify-center gap-3">

                      <FaTrash />

                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Cards */}
          <div className="grid lg:grid-cols-[1.5fr_.8fr] gap-8">

            {/* Booking Density */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

              {/* Glow */}
              <div className="absolute -top-20 left-0 w-[220px] h-[220px] bg-[#39FF14]/10 blur-[120px]" />

              <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-[#39FF14]/10 blur-[120px]" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-10">

                <div>

                  <h2 className="text-white text-3xl font-black mb-2">
                    Booking Density
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Weekly performance overview
                  </p>
                </div>

                <div className="bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] px-4 py-2 rounded-full text-sm font-bold">
                  +24%
                </div>
              </div>

              {/* Chart */}
              <div className="relative z-10">

                {/* Top Numbers */}
                <div className="flex justify-between text-gray-600 text-xs mb-5 px-1">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                </div>

                {/* Graph Area */}
                <div className="relative h-[240px] bg-[#0F0F0F]/70 border border-[#1F2937] rounded-[24px] p-6 overflow-hidden">

                  {/* Grid */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">

                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="border-t border-[#1F2937]"
                      />
                    ))}
                  </div>

                  {/* Neon Line */}
                  <svg
                    viewBox="0 0 600 240"
                    className="absolute inset-0 w-full h-full"
                    fill="none"
                  >

                    <defs>
                      <linearGradient
                        id="greenLine"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#39FF14"
                        />

                        <stop
                          offset="100%"
                          stopColor="#00FFB2"
                        />
                      </linearGradient>
                    </defs>

                    {/* Glow */}
                    <path
                      d="M20 180 C100 120, 150 140, 220 80 S350 40, 420 100 S520 180, 580 60"
                      stroke="url(#greenLine)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      opacity="0.18"
                    />

                    {/* Main Line */}
                    <path
                      d="M20 180 C100 120, 150 140, 220 80 S350 40, 420 100 S520 180, 580 60"
                      stroke="url(#greenLine)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Dots */}
                    {[
                      [20, 180],
                      [220, 80],
                      [420, 100],
                      [580, 60],
                    ].map((dot, i) => (

                      <circle
                        key={i}
                        cx={dot[0]}
                        cy={dot[1]}
                        r="7"
                        fill="#39FF14"
                      />
                    ))}
                  </svg>
                </div>

                {/* Days */}
                <div className="flex justify-between mt-5 text-gray-500 text-sm px-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            {/* Live Feed */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

              <h2 className="text-white text-3xl font-black mb-10 relative z-10">
                Live Feed
              </h2>

              <div className="space-y-8 relative z-10">

                {[
                  "New booking at Elite padel",
                  "Review received: 5 stars",
                  "Maintenance Alert",
                  "Payment Settled: $1,240",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="flex gap-4"
                  >

                    <div className="w-3 h-3 rounded-full bg-[#39FF14] mt-2 shadow-[0_0_10px_#39FF14]" />

                    <div>

                      <h4 className="text-white font-semibold">
                        {item}
                      </h4>

                      <p className="text-gray-500 text-sm mt-1">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-12 text-[#39FF14] font-bold">
                View Audit Log →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}