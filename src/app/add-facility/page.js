"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function AddFacilityPage() {

  const handleAddFacility = async (e) => {

    e.preventDefault();

    const form = e.target;

    const facilityData = {

      name: form.name.value,

      type: form.type.value,

      image: form.image.value,

      location: form.location.value,

      price: form.price.value,

      capacity: form.capacity.value,

      slots: form.slots.value,

      description: form.description.value,
    };

    console.log(facilityData);

    try {

      const res = await fetch("/api/facilities", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(facilityData),
      });

      const data = await res.json();

      console.log(data);

      if (data.success) {

        alert("Facility Added Successfully ✅");

        form.reset();
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong ❌");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050505] px-6 lg:px-10 py-32">

        <div className="max-w-6xl mx-auto">

          {/* Top */}
          <div className="mb-14">

            <p className="text-[#39FF14] uppercase tracking-[4px] text-sm font-semibold mb-4">
              Facility Management
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6">
              Create Your
              <span className="text-[#39FF14]">
                {" "}Elite Facility
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl leading-8">
              Publish premium sports facilities and start accepting bookings
              from athletes across your city.
            </p>
          </div>

          {/* Form */}
          <div className="bg-[#071120] border border-[#11203A] rounded-[32px] p-8 lg:p-12 shadow-[0_0_40px_rgba(57,255,20,0.06)]">

            <form
              onSubmit={handleAddFacility}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >

              {/* Facility Name */}
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Facility Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Apex Football Arena"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Facility Type */}
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Facility Type
                </label>

                <select
                  name="type"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                >
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Gym">Gym</option>
                </select>
              </div>

              {/* Image */}
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Facility Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  placeholder="https://image-url.com"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Dhaka, Bangladesh"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Price Per Hour
                </label>

                <input
                  type="number"
                  name="price"
                  placeholder="$50"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Capacity */}
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Capacity
                </label>

                <input
                  type="number"
                  name="capacity"
                  placeholder="20 Players"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Slots */}
              <div className="lg:col-span-2">
                <label className="text-white font-semibold mb-3 block">
                  Available Time Slots
                </label>

                <input
                  type="text"
                  name="slots"
                  placeholder="8AM - 10PM"
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14]"
                />
              </div>

              {/* Description */}
              <div className="lg:col-span-2">
                <label className="text-white font-semibold mb-3 block">
                  Description
                </label>

                <textarea
                  rows="7"
                  name="description"
                  placeholder="Write facility details..."
                  required
                  className="w-full bg-[#0B1627] border border-[#1B2A41] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14] resize-none"
                />
              </div>

              {/* Button */}
              <div className="lg:col-span-2">
                <button className="w-full bg-[#39FF14] hover:bg-[#2ee60f] text-black font-black py-5 rounded-2xl text-xl transition">
                  Publish Facility
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}