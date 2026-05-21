import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {

  try {

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    const facilities = await db
      .collection("facilities")
      .find({})
      .toArray();

    return NextResponse.json({
      success: true,
      facilities,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}