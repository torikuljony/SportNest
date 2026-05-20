import clientPromise from "@/lib/mongodb";

export async function GET() {

  try {

    const client = await clientPromise;

    const db = client.db("sportnestDB");

    return Response.json({
      success: true,
      message: "MongoDB Connected Successfully 🚀",
      db: db.databaseName,
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}