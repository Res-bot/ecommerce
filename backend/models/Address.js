import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  addressLine: String,
  city: String,
  postalCode: String,
  country: String,
});

export default mongoose.model('Address', addressSchema);