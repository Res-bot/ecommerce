import express from 'express';
import { addAddress, getAddress } from '../controller/addressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addAddress);
router.get('/', protect, getAddress);

export default router;
