import mongoose from 'mongoose';
const ImageSchema = new mongoose.Schema({
  imageID: { type: String, required: true }, // Assuming imageID is in PNG format
  sizesAvailable: { type: Number, required: true },
  outfitID: { type: mongoose.Schema.Types.ObjectId, ref: 'Outfit', required: true }
});

const Image = mongoose.model('Image', ImageSchema);

export default Image;

