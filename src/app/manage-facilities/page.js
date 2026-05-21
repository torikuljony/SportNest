"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

import { auth } from "@/firebase/firebase.config";

import { onAuthStateChanged } from "firebase/auth";

import {
  FaEdit,
  FaTrash,
  FaChartLine,
  FaStar,
  FaClock,
} from "react-icons/fa";

import {
  HiOutlineEye,
  HiOutlineFilter,
  HiOutlineSortDescending,
} from "react-icons/hi";

import {
  MdOutlineSportsTennis,
} from "react-icons/md";

export default function ManageFacilitiesPage() {

  const [facilities, setFacilities] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // SEARCH
  const [searchText, setSearchText] =
    useState("");

  // EDIT MODAL
  const [editModal, setEditModal] =
    useState(false);

  const [selectedFacility, setSelectedFacility] =
    useState(null);

  const [updatedPlayers, setUpdatedPlayers] =
    useState("");

  const [updatedTime, setUpdatedTime] =
    useState("");

  // AUTH FIX
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (user) {

            await fetchBookings(
              user.email
            );

          } else {

            setFacilities([]);
            setLoading(false);
          }
        }
      );

    return () => unsubscribe();

  }, []);

  // FETCH BOOKINGS
  const fetchBookings = async (
    email
  ) => {

    try {

      setLoading(true);

      const res = await fetch(
        "/api/bookings/all"
      );

      const data = await res.json();

      if (data.success) {

        const myBookings =
          data.bookings.filter(
            (booking) =>
              booking.userEmail ===
              email
          );

        setFacilities(myBookings);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  // DELETE
  const handleDelete = (id) => {

    const confirmDelete = confirm(
      "Delete this booking?"
    );

    if (!confirmDelete) return;

    const remaining =
      facilities.filter(
        (item) =>
          item._id !== id
      );

    setFacilities(remaining);
  };

  // OPEN EDIT
  const handleEdit = (
    facility
  ) => {

    setSelectedFacility(
      facility
    );

    setUpdatedPlayers(
      facility.players
    );

    setUpdatedTime(
      facility.time
    );

    setEditModal(true);
  };

  // UPDATE
  const handleUpdate = () => {

    const updatedFacilities =
      facilities.map((item) => {

        if (
          item._id ===
          selectedFacility._id
        ) {

          return {
            ...item,
            players:
              updatedPlayers,
            time:
              updatedTime,
          };
        }

        return item;
      });

    setFacilities(
      updatedFacilities
    );

    setEditModal(false);
  };

  // SEARCH FILTER
  const filteredFacilities =
    facilities.filter((item) =>

      item.facilityName
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        ) ||

      item.date
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        ) ||

      item.time
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );

  return (

    <PrivateRoute>

      <>
        <Navbar />

        <section className="bg-black min-h-screen px-6 lg:px-10 py-28 overflow-hidden">

          <div className="max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

              <div>

                <h1 className="text-[#39FF14] text-5xl font-black mb-3">
                  Manage Facilities
                </h1>

                <p className="text-gray-400 text-lg">
                  Optimization and oversight of your active venues.
                </p>

              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">

                {/* SEARCH */}
                <div className="bg-[#151515] border border-[#1F2937] rounded-full px-6 py-4 flex items-center gap-3 w-full lg:w-[320px]">

                  <span className="text-gray-500">
                    🔍
                  </span>

                  <input
                    type="text"
                    placeholder="Search facilities..."
                    value={searchText}
                    onChange={(e) =>
                      setSearchText(e.target.value)
                    }
                    className="bg-transparent outline-none text-sm text-white w-full"
                  />
                </div>

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

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-7 mb-16">

              <div className="relative overflow-hidden rounded-[30px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-8">

                  <FaChartLine className="text-[#39FF14] text-xl" />

                </div>

                <p className="text-gray-500 uppercase tracking-[2px] text-sm mb-4">
                  Total Bookings
                </p>

                <h2 className="text-white text-6xl font-black">
                  {facilities.length}
                </h2>

              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-8">

                  <HiOutlineEye className="text-[#39FF14] text-2xl" />

                </div>

                <p className="text-gray-500 uppercase tracking-[2px] text-sm mb-4">
                  Active Facilities
                </p>

                <h2 className="text-white text-6xl font-black">
                  {facilities.length}
                </h2>

              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-8">

                  <FaStar className="text-[#39FF14] text-xl" />

                </div>

                <p className="text-gray-500 uppercase tracking-[2px] text-sm mb-4">
                  Avg Rating
                </p>

                <h2 className="text-white text-6xl font-black">
                  4.9
                </h2>

              </div>
            </div>

            {/* LOADING */}
            {loading && (

              <div className="text-center text-[#39FF14] text-2xl font-bold py-20">
                Loading...
              </div>
            )}

            {/* FACILITY CARDS */}
            {!loading && (

              <div className="space-y-8 mb-16">

                {filteredFacilities.map((item) => (

                  <div
                    key={item._id}
                    className="relative overflow-hidden rounded-[32px] border border-[#1F2937] bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B]"
                  >

                    <div className="absolute -top-20 -left-20 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

                    <div className="absolute -bottom-20 -right-20 w-[180px] h-[180px] bg-[#39FF14]/10 blur-[120px]" />

                    <div className="grid lg:grid-cols-[320px_1fr_280px]">

                      {/* IMAGE */}
                      <div className="relative">

                        <img
                          src={item.facilityImage}
                          alt=""
                          className="w-full h-full min-h-[260px] object-cover"
                        />

                        <div className="absolute top-5 left-5">

                          <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#39FF14] text-black">
                            BOOKED
                          </span>

                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-8 flex flex-col justify-between">

                        <div>

                          <div className="flex items-start justify-between gap-5 mb-6">

                            <div>

                              <h3 className="text-white text-4xl font-black mb-3">
                                {item.facilityName}
                              </h3>

                              <p className="text-gray-400">
                                Booking Date :
                                {" "}
                                {item.date}
                              </p>

                            </div>

                            <div className="text-right">

                              <p className="text-gray-500 text-sm uppercase mb-2">
                                PRICE
                              </p>

                              <h3 className="text-[#39FF14] text-5xl font-black">
                                {item.price}
                              </h3>

                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4">

                            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 flex items-center gap-3 text-gray-300">

                              <MdOutlineSportsTennis className="text-[#39FF14]" />

                              {item.players} Players

                            </div>

                            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 flex items-center gap-3 text-gray-300">

                              <FaClock className="text-[#39FF14]" />

                              {item.time}

                            </div>

                          </div>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="p-8 flex flex-col justify-center gap-5">

                        <button
                          onClick={() =>
                            handleEdit(item)
                          }
                          className="w-full py-4 rounded-2xl border border-[#39FF14]/30 text-[#39FF14] flex items-center justify-center gap-3 hover:bg-[#39FF14] hover:text-black transition"
                        >

                          <FaEdit />

                          Edit

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              item._id
                            )
                          }
                          className="w-full py-4 rounded-2xl border border-red-500/40 text-red-500 flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition"
                        >

                          <FaTrash />

                          Delete

                        </button>

                      </div>
                    </div>
                  </div>
                ))}

                {filteredFacilities.length === 0 && (

                  <div className="bg-[#071120] border border-[#11203A] rounded-[35px] p-20 text-center">

                    <h2 className="text-white text-4xl font-black mb-4">
                      No Facilities Found
                    </h2>

                    <p className="text-gray-400 text-lg">
                      No bookings available.
                    </p>

                  </div>
                )}
              </div>
            )}
          </div>

          {/* EDIT MODAL */}
          {editModal && (

            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">

              <div className="w-full max-w-md bg-[#111111] border border-[#39FF14]/20 rounded-[30px] p-8">

                <h2 className="text-3xl font-black text-white mb-8">
                  Edit Booking
                </h2>

                <div className="space-y-5">

                  <div>

                    <label className="text-gray-400 text-sm block mb-2">
                      Players Number
                    </label>

                    <input
                      type="number"
                      value={updatedPlayers}
                      onChange={(e) =>
                        setUpdatedPlayers(
                          e.target.value
                        )
                      }
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-5 py-4 text-white outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-gray-400 text-sm block mb-2">
                      Time Slot
                    </label>

                    <input
                      type="text"
                      value={updatedTime}
                      onChange={(e) =>
                        setUpdatedTime(
                          e.target.value
                        )
                      }
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-5 py-4 text-white outline-none"
                    />

                  </div>
                </div>

                <div className="flex gap-4 mt-8">

                  <button
                    onClick={
                      handleUpdate
                    }
                    className="flex-1 bg-[#39FF14] text-black py-4 rounded-2xl font-bold"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={() =>
                      setEditModal(
                        false
                      )
                    }
                    className="flex-1 border border-red-500/40 text-red-500 py-4 rounded-2xl font-bold"
                  >
                    Cancel
                  </button>

                </div>
              </div>
            </div>
          )}
        </section>

        <Footer />
      </>

    </PrivateRoute>
  );
}