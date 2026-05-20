import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";

import { ObjectId } from "mongodb";

export async function DELETE(req, context) {

  try {

    const { id } = await context.params;

    console.log("DELETE ID:", id);

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    const bookingsCollection =
      db.collection("bookings");

    const result =
      await bookingsCollection.deleteOne({

        _id: new ObjectId(id),
      });

    return NextResponse.json({
      success: true,
      message: "Booking Deleted Successfully",
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}