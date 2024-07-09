import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Outfit from './models/Outfit.js';
import Comment from './models/Comment.js';
import Like from './models/Like.js';
import Item from './models/Item.js';

dotenv.config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
    insertSampleData();
  })
  .catch(err => console.log(err));

const insertSampleData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Outfit.deleteMany({});
    await Comment.deleteMany({});
    await Like.deleteMany({});
    await Item.deleteMany({});

    // Create users
    const users = await User.insertMany([
      { username: 'user1', email: 'user1@example.com', password: 'password1' },
      { username: 'user2', email: 'user2@example.com', password: 'password2' },
      { username: 'user3', email: 'user3@example.com', password: 'password3' },
      { username: 'user4', email: 'user4@example.com', password: 'password4' },
      { username: 'user5', email: 'user5@example.com', password: 'password5' },
      { username: 'user6', email: 'user6@example.com', password: 'password6' },
    ]);

    // Create items
    const items = await Item.insertMany([
      { itemType: 'Dress', name: 'Red Dress', description: 'A beautiful red dress.' },
      { itemType: 'Shoes', name: 'Red Shoes', description: 'Matching red shoes.' },
      { itemType: 'Bag', name: 'Red Bag', description: 'Stylish red bag.' },
      { itemType: 'Accessory', name: 'Red Necklace', description: 'Elegant red necklace.' },
      { itemType: 'Dress', name: 'Blue Dress', description: 'A stunning blue dress.' },
      { itemType: 'Shoes', name: 'Blue Shoes', description: 'Matching blue shoes.' },
      { itemType: 'Bag', name: 'Blue Bag', description: 'Stylish blue bag.' },
      { itemType: 'Accessory', name: 'Blue Necklace', description: 'Elegant blue necklace.' },
      { itemType: 'Dress', name: 'Green Dress', description: 'A charming green dress.' },
      { itemType: 'Shoes', name: 'Green Shoes', description: 'Matching green shoes.' },
      { itemType: 'Bag', name: 'Green Bag', description: 'Stylish green bag.' },
      { itemType: 'Accessory', name: 'Green Necklace', description: 'Elegant green necklace.' }
    ]);

    // Create outfits
    const outfits = await Outfit.insertMany([
      { outfitid: 1, name: 'Red Outfit', description: 'A complete red outfit.', modelid: 1, items: items.slice(0, 4) },
      { outfitid: 2, name: 'Blue Outfit', description: 'A complete blue outfit.', modelid: 2, items: items.slice(4, 8) },
      { outfitid: 3, name: 'Green Outfit', description: 'A complete green outfit.', modelid: 3, items: items.slice(8, 12) }
    ]);

    // Create comments
    const comments = await Comment.insertMany([
      { userId: users[0]._id, outfitId: outfits[0]._id, text: 'Love this outfit!' },
      { userId: users[1]._id, outfitId: outfits[0]._id, text: 'Amazing style!' },
      { userId: users[2]._id, outfitId: outfits[1]._id, text: 'Great color combination.' },
      { userId: users[3]._id, outfitId: outfits[1]._id, text: 'Looks fantastic!' },
      { userId: users[4]._id, outfitId: outfits[2]._id, text: 'Very stylish!' },
      { userId: users[5]._id, outfitId: outfits[2]._id, text: 'I want this outfit.' },
    ]);

    // Create likes
    const likes = [];
    for (let i = 0; i < 100; i++) {
      likes.push({ userId: users[i % users.length]._id, outfitId: outfits[i % outfits.length]._id });
    }
    await Like.insertMany(likes);

    console.log('Sample data inserted successfully.');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
