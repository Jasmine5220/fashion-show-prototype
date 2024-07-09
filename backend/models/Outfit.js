import mongoose from "mongoose";
import Item from "./Item.js";

const {Schema}=mongoose;

const OutfitSchema=new Schema({
    outfitid: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String},
    modelid: {type: Number},
    likes: {type: Number, default: 0},
    items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
});

export default mongoose.model('Outfit',OutfitSchema);