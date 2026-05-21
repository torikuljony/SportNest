import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {

  try {

    const client =
      await clientPromise;

    const db =
      client.db("sportnestDB");

    const bookingsCollection =
      db.collection("bookings");

    const bookings =
      await bookingsCollection
        .find({})
        .toArray();

    return NextResponse.json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}