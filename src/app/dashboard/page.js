"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

import { auth } from "@/firebase/firebase.config";

export default function MyBookingsPage() {

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      setLoading(true);

      const res = await fetch("/api/bookings/all");

      const data = await res.json();

      if (data.success) {

        const currentUser = auth.currentUser;

        if (currentUser) {

          const myBookings = data.bookings.filter(
            (booking) => booking.userEmail === currentUser.email
          );

          setBookings(myBookings);
        }
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = confirm(
      "Are you sure you want to cancel booking?"
    );

    if (!confirmDelete) return;

    try {

      const res = await fetch(`/api/bookings/delete/${id}`, {

        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {

        alert("Booking Cancelled ❌");

        fetchBookings();
      }

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <PrivateRoute>

      <>
        <Navbar />

        <section className="min-h-screen bg-black px-6 lg:px-10 py-32 overflow-hidden">

          <div className="max-w-7xl mx-auto">

            {/* Hero */}
            <div className="relative mb-20">

              <div className="absolute w-[300px] h-[300px] bg-[#39FF14]/10 blur-[140px] rounded-full top-0 left-0" />

              <p className="text-[#39FF14] uppercase tracking-[6px] text-sm font-bold mb-5 relative z-10">
                Booking Control Center
              </p>

              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8 relative z-10">
                My Elite
                <br />

                <span className="text-[#39FF14]">
                  Bookings
                </span>
              </h1>

              <p className="text-gray-400 text-lg leading-8 max-w-2xl relative z-10">
                Manage your booked sports facilities easily.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

              <div className="bg-[#071120] border border-[#11203A] rounded-[30px] p-8">

                <h2 className="text-[#39FF14] text-5xl font-black mb-3">
                  {bookings.length}
                </h2>

                <p className="text-gray-400">
                  Total Reservations
                </p>
              </div>

              <div className="bg-[#071120] border border-[#11203A] rounded-[30px] p-8">

                <h2 className="text-[#39FF14] text-5xl font-black mb-3">
                  {
                    bookings.filter(
                      (booking) => booking.status !== "Cancelled"
                    ).length
                  }
                </h2>

                <p className="text-gray-400">
                  Active Bookings
                </p>
              </div>

              <div className="bg-[#071120] border border-[#11203A] rounded-[30px] p-8">

                <h2 className="text-[#39FF14] text-5xl font-black mb-3">
                  $
                  {
                    bookings.reduce((total, booking) => {

                      const price =
                        Number(
                          booking.price?.replace("$", "")
                        ) || 0;

                      return total + price;

                    }, 0)
                  }
                </h2>

                <p className="text-gray-400">
                  Total Spent
                </p>
              </div>
            </div>

            {/* Loading */}
            {loading && (

              <div className="text-center text-[#39FF14] text-2xl font-bold py-20">
                Loading Bookings...
              </div>
            )}

            {/* Booking Cards */}
            {!loading && (

              <div className="space-y-10">

                {bookings.map((booking) => (

                  <div
                    key={booking._id}
                    className="group bg-[#071120] border border-[#11203A] rounded-[35px] overflow-hidden hover:border-[#39FF14]/40 transition duration-500"
                  >

                    <div className="grid lg:grid-cols-2">

                      {/* Image */}
                      <div className="relative overflow-hidden">

                        <img
                          src={booking.facilityImage}
                          alt=""
                          className="w-full h-full min-h-[350px] object-cover group-hover:scale-110 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                        <div className="absolute top-6 left-6">

                          <span className="px-5 py-2 rounded-full text-sm font-black bg-[#39FF14] text-black">
                            Confirmed
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-between">

                        <div>

                          <h2 className="text-white text-4xl md:text-5xl font-black mb-8 leading-tight">
                            {booking.facilityName}
                          </h2>

                          <div className="grid grid-cols-2 gap-8 mb-10">

                            <div>
                              <p className="text-gray-500 text-sm mb-3 uppercase">
                                Booking Date
                              </p>

                              <h3 className="text-white text-2xl font-bold">
                                {booking.date}
                              </h3>
                            </div>

                            <div>
                              <p className="text-gray-500 text-sm mb-3 uppercase">
                                Time Slot
                              </p>

                              <h3 className="text-white text-2xl font-bold">
                                {booking.time}
                              </h3>
                            </div>

                            <div>
                              <p className="text-gray-500 text-sm mb-3 uppercase">
                                Players
                              </p>

                              <h3 className="text-white text-2xl font-bold">
                                {booking.players}
                              </h3>
                            </div>

                            <div>
                              <p className="text-gray-500 text-sm mb-3 uppercase">
                                Price
                              </p>

                              <h3 className="text-[#39FF14] text-3xl font-black">
                                {booking.price}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-5">

                          <button
                            onClick={() => handleDelete(booking._id)}
                            className="border border-red-500 text-red-500 px-10 py-4 rounded-2xl font-black hover:bg-red-500 hover:text-white transition"
                          >
                            Cancel Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {bookings.length === 0 && (

                  <div className="bg-[#071120] border border-[#11203A] rounded-[35px] p-20 text-center">

                    <h2 className="text-white text-4xl font-black mb-4">
                      No Bookings Found
                    </h2>

                    <p className="text-gray-400 text-lg">
                      You haven’t booked any facilities yet.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </>

    </PrivateRoute>
  );
}