import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  itemType: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coupon_code: { type: String },
  best_price: { type: Number, required: true },
  discount: { type: String, required: true },
  discount_price: { type: Number, required: true },
  rating: { type: Number, required: true },
  wishlist: { type: Boolean, default: false },
  imageUrl: { type: String, required: true } // New field for image URL
});

export default mongoose.model('Item', ItemSchema);
