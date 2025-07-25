import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected at: ${conn.connection.host}`)
    } catch (err) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}