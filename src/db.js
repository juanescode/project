import mongoose from "mongoose";
// establecemos conexion con MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/tienda");
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};
