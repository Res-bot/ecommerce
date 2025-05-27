import express from 'express';
import { register, login } from '../controller/authController.js';
import passport from 'passport';
import '../config/passport.js'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/oauth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  router.get('/oauth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login',
      session: false,
    }),
    (req, res) => {
      // Redirect or send token after successful login
      const { token } = req.user;
      res.redirect(`${process.env.FRONTEND_URL}/oauth-success?token=${token}`);
    }
  );

export default router;
