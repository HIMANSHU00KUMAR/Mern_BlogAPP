// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL,{
        dbName:'MernBlogData'
    });
       

    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process on connection failure
  }
};

// module.exports = connectDB;
export default connectDB;