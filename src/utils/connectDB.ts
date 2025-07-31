import mongoose, { Mongoose } from "mongoose";


export const connection = async function(){
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to db");
    }catch (error){
        console.error("Error "+error);
    }
}

connection();
