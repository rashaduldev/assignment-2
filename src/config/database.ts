// import mongoose from 'mongoose';


// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DATABASE_URL || '');
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     process.exit(1);
//   }
// };

// export default {
//     database_url:process.env.DATABASE_URL
// };


import  dotenv  from "dotenv";
import path from "path";


dotenv.config({
    path:path.join(process.cwd(),".env")
})

export default {
    database_url:process.env.DATABASE_URL
};