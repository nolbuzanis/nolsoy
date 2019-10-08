const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/user');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          where: {
            googleId: profile.id
          }
        });

        if (!existingUser) {
          const newUser = {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          };
          User.create(newUser);
          done(null, newUser);
        }

        done(null, existingUser);
      } catch (err) {
        done(err);
      }
    }
  )
);
