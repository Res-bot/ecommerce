import express from 'express';
import { getProfile, getAllUsers } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, getProfile);
router.get('/', protect, getAllUsers); 

export default router;
