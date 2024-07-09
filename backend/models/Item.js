import mongoose from "mongoose";

const Schema=mongoose.Schema;

const ItemSchema=new Schema({
    itemType: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String},
});

export default mongoose.model('Item',ItemSchema);