import clientPromise from "@/lib/mongodb";

export async function POST(req) {

  try {

    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    const facilitiesCollection =
      db.collection("facilities");

    const result =
      await facilitiesCollection.insertOne(body);

    return Response.json({

      success: true,

      message:
        "Facility Added Successfully 🚀",

      result,
    });

  } catch (error) {

    return Response.json({

      success: false,

      error: error.message,
    });
  }
}