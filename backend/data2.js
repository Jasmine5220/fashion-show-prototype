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
    // Create Users
    const users = await User.insertMany([
      { username: 'user21', email: 'user21@example.com', password: 'password123' },
      { username: 'user22', email: 'user22@example.com', password: 'password123' },
      { username: 'user23', email: 'user23@example.com', password: 'password123' },
      { username: 'user24', email: 'user24@example.com', password: 'password123' },
      { username: 'user25', email: 'user25@example.com', password: 'password123' },
    ]);

    // Create Items
    const items = await Item.insertMany([
      {
        itemType: "Sweater",
        name: "Solid Sleeves Pullover",
        description: "Roadster Lifestyle Co. green solid acrylic puff sleeves pullover for women",
        price: 1699,
        coupon_code: "MYNTRAHALFPRICE",
        best_price: 616,
        discount: "59% off",
        discount_price: 696,
        rating: 4.4,
        wishlist: true,
        imageUrl: "/outfit2/image21.png"
      },
      {
        itemType: "Jogger",
        name: "Cargo Jogger",
        description: "Globus olive green woven mid-rise, regular fit cargo trouser for women",
        price: 2599,
        coupon_code: "MYNTRA300",
        best_price: 1441,
        discount: "33% off",
        discount_price: 1741,
        rating: 4.2,
        wishlist: true,
        imageUrl: "/outfit2/image22.png"
      },
      {
        itemType: "Boots",
        name: "Ankle Casual Boots",
        description: "El Paso black pro guard, round toe flat boots for women",
        price: 4330,
        coupon_code: "MYNTRA300",
        best_price: 950,
        discount: "73% off",
        discount_price: 1169,
        rating: 4.1,
        wishlist: true,
        imageUrl: "/outfit2/image23.png"
      },
      {
        itemType: "Lipstick",
        name: "Matte Lipstick",
        description: "Lakme Cushion, Long lasting Matte Lipstick - Red Aurora CR8",
        price: 299,
        coupon_code: "GLOWUP",
        best_price: 109,
        discount: "38% off",
        discount_price: 185,
        rating: 4.3,
        wishlist: true,
        imageUrl: "/outfit2/image24.png"
      },
    ]);

    // Create Outfits
    const outfits = await Outfit.insertMany([
      {
        outfitid: 2,
        modelid: 2,
        likes: Math.floor(Math.random() * 1000) + 100,
        items: items.map(item => item.name),
        wishlist: true
      }
    ]);

    // Create Likes
    const likes = await Like.insertMany([
      { userId: users[0]._id, outfitId: outfits[0]._id },
      { userId: users[1]._id, outfitId: outfits[0]._id },
      { userId: users[2]._id, outfitId: outfits[0]._id },
      { userId: users[3]._id, outfitId: outfits[0]._id },
      { userId: users[4]._id, outfitId: outfits[0]._id }
    ]);

    // Create Comments
    const comments = await Comment.insertMany([
      { userId: users[0]._id, outfitId: outfits[0]._id, text: "Love this outfit!" },
      { userId: users[1]._id, outfitId: outfits[0]._id, text: "Looks great!" },
      { userId: users[2]._id, outfitId: outfits[0]._id, text: "Stylish and comfortable." },
      { userId: users[3]._id, outfitId: outfits[0]._id, text: "Love the cargo jogger, looks so comfortable to wear." },
      { userId: users[4]._id, outfitId: outfits[0]._id, text: "I will definitely buy the red lipstick!" }
    ]);

    console.log("Data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting data", error);
    process.exit(1);
  }
};
