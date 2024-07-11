// server.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import Item from "./models/Item.js";
import Outfit from "./models/Outfit.js";

dotenv.config();

const app = express();
const port = 3000;

// Add this before your routes
app.use(cors());
app.use(bodyParser.json());

const connectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionString).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.log("MongoDB connection error", err);
});

// Route to get all items
app.get("/api/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Error fetching items" });
    }
});

// Route to get all outfits
app.get("/api/outfits", async (req, res) => {
    try {
        const outfits = await Outfit.find();
        res.json(outfits);
    } catch (error) {
        res.status(500).json({ error: "Error fetching outfits" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
