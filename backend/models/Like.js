import mongoose from "mongoose";
import User from "./User.js";
import Outfit from "./Outfit.js";

const {Schema}=mongoose;

const LikeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  outfitId: { type: Schema.Types.ObjectId, ref: 'Outfit', required: true },
});

export default mongoose.model('Like', LikeSchema);
