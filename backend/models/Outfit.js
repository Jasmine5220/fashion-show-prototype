import mongoose from "mongoose";

const { Schema } = mongoose;

const OutfitSchema = new Schema({
  outfitid: { type: Number, required: true, unique: true },
  modelid: { type: Number },
  likes: { type: Number, default: 0 },
  items: [{ type: String, required: true }],
  wishlist: { type: Boolean, default: false }
});

export default mongoose.model('Outfit', OutfitSchema);
