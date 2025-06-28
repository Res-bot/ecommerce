import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import Address from '../models/Address.js';

export const confirmOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  const address = await Address.findOne({ user: req.user._id });

  const order = await Order.create({
    user: req.user._id,
    cart,
    address,
    paymentStatus: 'Paid',
  });

  await Cart.deleteOne({ user: req.user._id }); 

  res.json(order);
};
