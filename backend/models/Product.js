import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: {type: String , required: true}
});

export default mongoose.model('Product', productSchema);
