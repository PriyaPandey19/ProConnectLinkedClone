import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import postRoute from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
 
const app = express();
app.use(cors());

app.use(express.json());
app.use(userRoutes);
app.use(postRoute);

app.use(express.static("uploads"))



const start = async() => {
    const connectDB = await mongoose.connect("mongodb+srv://pp479021_db_user:5l1NJeTEbd4bBO8m@apnaproconnect.dbuak33.mongodb.net/?appName=apnaproconnect")

    app.listen(9090,() => {
        console.log("Server is running on port 9090");
    })
}

start();