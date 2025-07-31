import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connection = async function connectDb() {
    try{
        await mongoose.connect(proccess.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

connection();
