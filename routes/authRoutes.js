const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      session: false,
      failureRedirect: '/login'
    }),
    (req, res) => {
      res.redirect('/');
    }
  );
};
