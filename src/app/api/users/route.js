import clientPromise from "@/lib/mongodb";

export async function POST(req) {

  try {

    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({
      email: body.email,
    });

    if (existingUser) {

      return Response.json({
        success: true,
        message: "User already exists",
      });
    }

    const result = await usersCollection.insertOne(body);

    return Response.json({
      success: true,
      message: "User saved successfully",
      result,
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}