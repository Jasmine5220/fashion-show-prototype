import mongoose from "mongoose";
import User from "./User.js";
import Outfit from "./Outfit.js";
const {Schema}=mongoose;

const CommentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  outfitId: { type: Schema.Types.ObjectId, ref: 'Outfit', required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Comment', CommentSchema);
