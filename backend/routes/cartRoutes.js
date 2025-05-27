import express from 'express';
import {
  addToCart,
  getCart,
  decreaseQuantity,
  removeFromCart
} from '../controller/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addToCart);
router.get('/', protect, getCart);
router.put('/', protect, decreaseQuantity);
router.delete('/:productId', protect, removeFromCart);

export default router;