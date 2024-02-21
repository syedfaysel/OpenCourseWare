import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    // console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log("Mongoose connected to DB");
    })
    
    connection.on('error', (err) => {
      console.log("Mongoose connection error, make sure MongoDB is running", err);
      process.exit();
    })
  } catch (error) {
    console.log("Error in dbConnect: ", error);
  }
}
