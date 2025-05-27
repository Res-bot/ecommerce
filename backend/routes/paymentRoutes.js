import express from 'express';
import {
  initiatePayment,
  confirmPayment
} from '../controller/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/initiate', protect, initiatePayment);
router.post('/confirm', protect, confirmPayment);

export default router;
