import mongoose from "mongoose";
import User from "./models/User.js";
import Outfit from "./models/Outfit.js";
import Comment from "./models/Comment.js";
import Like from "./models/Like.js";
import Item from "./models/Item.js";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionString)
  .then(() => {
    console.log("MongoDB connected successfully");
    insertData();
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

const insertData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Outfit.deleteMany({});
    await Comment.deleteMany({});
    await Like.deleteMany({});
    await Item.deleteMany({});

    // Create Users
    const users = await User.insertMany([
      { username: 'user1', email: 'user1@example.com', password: 'password123' },
      { username: 'user2', email: 'user2@example.com', password: 'password123' },
      { username: 'user3', email: 'user3@example.com', password: 'password123' },
    ]);

    // Create Items
    const items = await Item.insertMany([
      {
        itemType: "Shirt",
        name: "Solid Classic Formal Shirt",
        description: "Sojanya men rust brown cotten linen stylish formal shirt for men.",
        price: 2249,
        coupon_code: "MYNTRA300",
        best_price: 414,
        discount: "77% off",
        discount_price: 517,
        rating: 3.5,
        wishlist: true,
        imageUrl: "/outfit1/image11.png"
      },
      {
        itemType: "Jeans",
        name: "Light Fade Stretchable Jeans",
        description: "Louis philippe slim,comfortable & stretchable jeans for men.",
        price: 2999,
        coupon_code: "MYNTRA300",
        best_price: 1499,
        discount: "40% off",
        discount_price: 1799,
        rating: 4.5,
        wishlist: false,
        imageUrl: "/outfit1/image12.png"
      },
      {
        itemType: "Shoes",
        name: "Leather Formal Oxford Shoes",
        description: "Mochi black textured elegant formal shoes for men.",
        price: 2481,
        coupon_code: "MYNTRA300",
        best_price: 1148,
        discount: "17% off",
        discount_price: 2481,
        rating: 4.7,
        wishlist: true,
        imageUrl: "/outfit1/image13.png"
      }
    ]);

    // Create Outfits
    const outfits = await Outfit.insertMany([
      {
        outfitid: 1,
        modelid: 1,
        likes: Math.floor(Math.random() * 1000) + 100,
        items: items.map(item => item.name),
        wishlist: true
      }
    ]);

    // Create Likes
    const likes = await Like.insertMany([
      { userId: users[0]._id, outfitId: outfits[0]._id },
      { userId: users[1]._id, outfitId: outfits[0]._id },
      { userId: users[2]._id, outfitId: outfits[0]._id }
    ]);

    // Create Comments
    const comments = await Comment.insertMany([
      { userId: users[0]._id, outfitId: outfits[0]._id, text: "Love this outfit!" },
      { userId: users[1]._id, outfitId: outfits[0]._id, text: "Looks great!" },
      { userId: users[2]._id, outfitId: outfits[0]._id, text: "Stylish and comfortable." }
    ]);

    console.log("Data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting data", error);
    process.exit(1);
  }
};
