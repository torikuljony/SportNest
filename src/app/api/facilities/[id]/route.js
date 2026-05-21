// import clientPromise from "@/lib/mongodb";
// import { ObjectId } from "mongodb";
// import { NextResponse } from "next/server";

// // DELETE FACILITY
// export async function DELETE(req, { params }) {

//   try {

//     const client = await clientPromise;

//     const db = client.db("sportnestDB");

//     const facilitiesCollection =
//       db.collection("facilities");

//     const result =
//       await facilitiesCollection.deleteOne({

//         _id: new ObjectId(params.id),
//       });

//     return NextResponse.json({

//       success: true,

//       message: "Facility Deleted Successfully",

//       result,
//     });

//   } catch (error) {

//     return NextResponse.json({

//       success: false,

//       error: error.message,
//     });
//   }
// }