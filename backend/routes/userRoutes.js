import express from 'express';
import { getProfile, getAllUsers } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, getProfile);
router.get('/', protect, getAllUsers); // You might restrict this to admin in a real app

export default router;
