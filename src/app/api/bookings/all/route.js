import clientPromise from "@/lib/mongodb";

export async function GET() {

  try {

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    const bookingsCollection = db.collection("bookings");

    const bookings = await bookingsCollection.find().toArray();

    return Response.json({
      success: true,
      bookings,
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}