import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cart: Object,
  address: Object,
  paymentStatus: String,
});

export default mongoose.model('Order', orderSchema);
