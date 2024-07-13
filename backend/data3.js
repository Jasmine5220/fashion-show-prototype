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
      { username: 'user1', email: 'user331@example.com', password: 'password123' },
      { username: 'user2', email: 'user332@example.com', password: 'password123' },
      { username: 'user3', email: 'user333@example.com', password: 'password123' },
    ]);

    // Create Items
    const items = await Item.insertMany([
      {
        itemType: "T-shirt",
        name: "Solid T-shirt",
        description: "Chemistry solid pink, round neck, cap sleeves knitted cotton fabric t-shirt for women",
        price: 1199,
        coupon_code: "MYNTRAHALFPRICE",
        best_price: 279,
        discount: "70% off",
        discount_price: 359,
        rating: 4.2,
        wishlist: true,
        imageUrl: "/outfit3/image31.png"
      },
      {
        itemType: "Jeans",
        name: "Skinny fit Jeans",
        description: "BAESD skinny-fit high rise heavy fade stretchable clean look cotton jeans for women",
        price: 6999,
        coupon_code: "MYNTRA300",
        best_price: 738,
        discount: "87% off",
        discount_price: 909,
        rating: 4.4,
        wishlist: true,
        imageUrl: "/outfit3/image32.png"
      },
      {
        itemType: "Boots",
        name: "Regular Boots",
        description: "Roadster Lifestyle Co. brown mid top block heel regular boots for women",
        price: 4330,
        coupon_code: "MYNTRA300",
        best_price: 950,
        discount: "73% off",
        discount_price: 1169,
        rating: 4.1,
        wishlist: true,
        imageUrl: "/outfit3/image33.png"
      },
      {
        itemType: "Ring",
        name: "Finger ring",
        description: "Designs & You Silver-plated American diamond studded adjustable finger ring",
        price: 2329,
        coupon_code: "MYNTRA300",
        best_price: 473,
        discount: "75% off",
        discount_price: 582,
        rating: 4.5,
        wishlist: true,
        imageUrl: "/outfit3/image34.png"
      },
    ]);

    // Create Outfits
    const outfits = await Outfit.insertMany([
      {
        outfitid: 3,
        modelid: 3,
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
    ]);

    // Create Comments
    const comments = await Comment.insertMany([
      { userId: users[0]._id, outfitId: outfits[0]._id, text: "Love this outfit!" },
      { userId: users[1]._id, outfitId: outfits[0]._id, text: "Looks great!" },
      { userId: users[2]._id, outfitId: outfits[0]._id, text: "Stylish and comfortable." },
    ]);

    console.log("Data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting data", error);
    process.exit(1);
  }
};
