import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/oauth/google/callback',
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: profile.id, 
            isOAuth: true,
            role: 'user'
          });
        }

        const token = jwt.sign(
          { id: user._id, role: user.role }, 
          process.env.JWT_SECRET, 
          { expiresIn: '7d' }
        );

        done(null, { 
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token 
        });
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});