const passport = require('passport');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');

module.exports = app => {
  app.use(cors());

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
    (req, res, next) => {
      // Assume user is logged in. Authentication errors handled by passport since passport.authenticate() only continues if user login is sucessful
      // Grab user from req.user
      const user = req.user.dataValues;

      if (!user) {
        return res.status(400).json({
          message: 'User is not defined.',
          user: user
        });
      }

      req.login(user, { session: false }, err => {
        if (err) {
          res.send(err);
        }

        // Generate signed JWT token with user object and return it in response object for client to assign to localStorage
        const token = jwt.sign(user, keys.JWTKey);
        return res.json({ user, token });

        /*  const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('JWT', '${token}');
         window.localStorage.setItem('user', '${JSON.stringify(user)}');
        // Redirect browser to root of application
        window.location.href = '/';
      </script>
    </html>
    `; 

        res.send(htmlWithEmbeddedJWT);*/
      });
    }
  );
};
