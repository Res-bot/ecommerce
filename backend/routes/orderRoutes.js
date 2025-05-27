import express from 'express';
import { confirmOrder } from '../controller/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, confirmOrder);

export default router;
