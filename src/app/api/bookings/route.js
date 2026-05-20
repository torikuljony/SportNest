import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";

export async function POST(req) {

  try {

    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    const bookingsCollection =
      db.collection("bookings");

    const result =
      await bookingsCollection.insertOne(body);

    return NextResponse.json({
      success: true,
      message: "Booking Added Successfully",
      result,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}