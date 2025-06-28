import express from 'express';
import upload from '../config/multer.js';
import { protect, adminMiddleware } from '../middleware/authMiddleware.js';
import { getOrders, addProduct } from '../controller/adminController.js';

const router = express.Router();

router.post('/add-product', upload.single('image'), addProduct);
router.get('/orders', protect, adminMiddleware, getOrders);

export default router; // ✅ use ES module export
