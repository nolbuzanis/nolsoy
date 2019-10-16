const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// JWT tokens stuff
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    console.log('User found!');
    done(null, user);
  } catch (err) {
    console.log(err);
    done(err);
  }
});

passport.use(
  'local-signup',
  new LocalStrategy(
    {
      // Override local strategy which uses 'username' and 'password'
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: {
            email: email
          }
        });

        // If user already exists with that email then return with no user.
        if (user) {
          console.log('User already exists');
          return done(
            null,
            false,
            'signupMessage',
            'That email is already taken.'
          );
        }

        // If no user exists, create a new user with hashed password
        var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        const newUser = {
          email: email,
          password: hash
        };
        User.create(newUser);
        done(null, newUser);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);

passport.use(
  'google',
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
            googleEmail: profile.emails[0].value
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
  jwtFromRequest: req => req.cookies.jwt,
  secretOrKey: keys.JWTKey
};

passport.use(
  'jwt',
  new JWTStrategy(options, async (jwt_payload, done) => {
    try {
      if (Date.now() > jwt_payload.expires) {
        return done('jwt expired');
      }

      const user = await User.findOne({
        where: {
          googleId: jwt_payload.id
        }
      });

      // If user exists
      if (user) {
        console.log('User found in db, pass user on through passport process');
        return done(null, user);
      } else {
        // User not found
        console.log('User not found in db.');
        return done(null, false);
      }
    } catch (err) {
      return done(err);
    }
  })
);
