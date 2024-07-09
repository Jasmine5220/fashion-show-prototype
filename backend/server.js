import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import User from "./models/User.js";
import Outfit from "./models/Outfit.js";
import Comment from "./models/Comment.js";
import Like from "./models/Like.js";
import Item from "./models/Item.js";

dotenv.config();

const app=express();
const port=3000;

app.use(bodyParser.json());

const connectionString=process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionString).then(()=> {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection error",err);
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});