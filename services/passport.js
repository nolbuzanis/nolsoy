const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/user');

// JWT tokens stuff
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'login',
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

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: keys.JWTKey
};

passport.use(
  'jwt',
  new JWTStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({
        where: {
          googleId: jwt_payload.id
        }
      });

      // If user exists
      if (user) {
        console.log('User found in db, pass user on through passport process');
        done(null, user);
      } else {
        // User not found
        console.log('User not found in db.');
        done(null, false);
      }
    } catch (err) {
      done(err);
    }
  })
);
