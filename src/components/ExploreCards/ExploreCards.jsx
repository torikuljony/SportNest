"use client";
import {
  FaShower,
  FaWifi,
  FaDumbbell,
  FaVideo,
  FaCoffee,
  FaBolt,
} from "react-icons/fa";

import { useState } from "react";
import Link from "next/link";

export default function ExploreCards() {

  const [activeCategory, setActiveCategory] =
    useState("All Sports");

  const sports = [

    {
      id: 1,
      category: "TENNIS",
      title: "Apex Center Court",
      location: "Downtown Athletics Hub",
      price: "$45",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      category: "BASKETBALL",
      title: "Neon Pro Hoop",
      location: "Eastside Sport Plaza",
      price: "$35",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      category: "SOCCER",
      title: "Emerald Turf Pitch",
      location: "West Valley Sports Park",
      price: "$60",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      category: "GYM",
      title: "Iron Lab Fitness",
      location: "Metropolis Financial Dist.",
      price: "$20",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 5,
      category: "PADEL",
      title: "Velocity Padel Club",
      location: "Docklands Complex",
      price: "$40",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 6,
      category: "SWIMMING",
      title: "Aquatic Zenith Pool",
      location: "North Shore Marina",
      price: "$25",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 7,
      category: "TENNIS",
      title: "The Volley Lab",
      location: "Uptown Athletic Club",
      price: "$50",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 8,
      category: "GYM",
      title: "Titan Strength Hub",
      location: "Industrial District Labs",
      price: "$15",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    },

    // NEW CARDS

    {
      id: 9,
      category: "SOCCER",
      title: "Royal Arena Stadium",
      location: "Queens Sports City",
      price: "$70",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 10,
      category: "BASKETBALL",
      title: "Skyline Dunk Court",
      location: "Miami Sports Zone",
      price: "$38",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 11,
      category: "SWIMMING",
      title: "BlueWave Pool Club",
      location: "Oceanic Bay",
      price: "$28",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1576013551627-0b744bca024d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 12,
      category: "PADEL",
      title: "Padel Infinity",
      location: "Dubai Sports Hub",
      price: "$55",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 13,
      category: "GYM",
      title: "Muscle Factory",
      location: "Elite Fitness Center",
      price: "$18",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 14,
      category: "TENNIS",
      title: "Grand Ace Court",
      location: "California Sports Club",
      price: "$48",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 15,
      category: "SOCCER",
      title: "Victory Football Dome",
      location: "Champion Arena",
      price: "$65",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 16,
      category: "BASKETBALL",
      title: "Urban Legends Court",
      location: "LA Street Complex",
      price: "$42",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1505666287802-931dc83a2f67?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const categories = [
    "All Sports",
    "Tennis",
    "Basketball",
    "Soccer",
    "Swimming",
    "Gym",
    "Padel",
  ];

  const filteredSports =
    activeCategory === "All Sports"
      ? sports
      : sports.filter(
          (sport) =>
            sport.category.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  return (
    <section className="bg-[#050505] min-h-screen px-6 lg:px-10 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-10">
          Discover Elite Facilities
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-14">

          {categories.map((item, index) => (

            <button
              key={index}
              onClick={() => setActiveCategory(item)}
              className={`px-5 py-3 rounded-full border text-sm font-medium transition ${
                activeCategory === item
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

          {filteredSports.map((sport) => (

            <Link
              href={`/facility-details?title=${encodeURIComponent(
                sport.title
              )}&location=${encodeURIComponent(
                sport.location
              )}&price=${encodeURIComponent(
                sport.price
              )}&rating=${encodeURIComponent(
                sport.rating
              )}&category=${encodeURIComponent(
                sport.category
              )}&image=${encodeURIComponent(
                sport.image
              )}`}
              key={sport.id}
              className="bg-[#071120] border border-[#11203A] rounded-[22px] overflow-hidden hover:border-[#39FF14]/50 transition block"
            >

              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">

                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#39FF14] text-black text-[10px] font-bold px-3 py-1 rounded-full">
                  {sport.category}
                </span>

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

                    <span className="text-gray-500 text-sm">
                      {" "}
                      /hr
                    </span>
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
            Showing {filteredSports.length} elite facilities near you
          </p>
        </div>

                {/* Premium Gallery Section */}

<div className="mt-28 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute left-[-100px] top-20 w-[300px] h-[300px] bg-[#39FF14]/10 blur-[140px] rounded-full"></div>

  <div className="absolute right-[-100px] bottom-0 w-[300px] h-[300px] bg-[#39FF14]/10 blur-[140px] rounded-full"></div>

  {/* Heading */}
  <div className="mb-12 relative z-10">

    <p className="text-[#39FF14] uppercase tracking-[5px] text-sm font-bold mb-4">
      Premium Experience
    </p>

    <h2 className="text-white text-4xl md:text-6xl font-black leading-tight max-w-3xl">
      Discover The Future Of
      <span className="text-[#39FF14]"> Elite Sports</span>
    </h2>
  </div>

  {/* Auto Sliding Gallery */}
  <div className="relative overflow-hidden">

    <div className="flex gap-6 marquee">

      {[
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
      ].map((img, index) => (

        <div
          key={index}
          className="min-w-[380px] h-[240px] rounded-[30px] overflow-hidden border border-[#1F2937] relative group flex-shrink-0"
        >

          <img
            src={img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-2xl font-bold">
              Elite Arena
            </h3>

            <p className="text-gray-300 text-sm mt-1">
              Professional Performance Zone
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

                   {/* Bottom Premium Cards */}


<div className="grid lg:grid-cols-2 gap-8 mt-24">

  {/* About Card */}
  <div className="relative overflow-hidden rounded-[30px] border border-[#2A2A2A] bg-[#111111] p-8">

    {/* Green Glow */}
    <div className="absolute -top-20 -left-20 w-[220px] h-[220px] bg-[#39FF14]/10 blur-[90px] rounded-full"></div>

    <div className="absolute -bottom-20 -right-20 w-[220px] h-[220px] bg-[#39FF14]/10 blur-[90px] rounded-full"></div>

    <div className="relative z-10">

      <h2 className="text-white text-3xl font-bold mb-5">
        About the Facility
      </h2>

      <p className="text-gray-400 leading-8 text-[15px]">
        Experience the pinnacle of sports performance at our premium
        facilities. Designed for elite athletes and passionate players,
        every venue combines professional-grade infrastructure with
        luxury comfort for an unforgettable experience.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-8">

        <span className="px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-sm">
          Indoor
        </span>

        <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 text-sm">
          Professional Lighting
        </span>

        <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 text-sm">
          Climate Controlled
        </span>

        <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 text-sm">
          Locker Rooms
        </span>
      </div>
    </div>
  </div>

  {/* Amenities Card */}
  <div className="relative overflow-hidden rounded-[30px] border border-[#2A2A2A] bg-[#111111] p-8">

    {/* Green Glow */}
    <div className="absolute -top-20 -right-20 w-55 h-55 bg-[#39FF14]/10 blur-[90px] rounded-full"></div>

    <div className="absolute -bottom-20 -left-20 w-55 h-55 bg-[#39FF14]/10 blur-[90px] rounded-full"></div>

    <div className="relative z-10">

      <h2 className="text-white text-3xl font-bold mb-8">
        Premium Amenities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Item */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] text-lg">
            <FaShower />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">
              Elite Locker Suites
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              Private showers, steam rooms, and premium changing areas.
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] text-lg">
            <FaVideo />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">
              Smart Replay System
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              AI-powered cameras for instant replay and analysis.
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] text-lg">
            <FaCoffee />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">
              Performance Lounge
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              Recovery drinks, coffee bar, and nutrition station.
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] text-lg">
            <FaWifi />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">
              Ultra Fast WiFi
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              High-speed connectivity throughout the facility.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


</div>

      </div>
    </section>
  );
}