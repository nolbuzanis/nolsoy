const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const flash = require('connect-flash');

const sequelize = require('./config/database');
const app = express();

app.use(
  cookieSession({
    maxAge: 59 * 60 * 1000, //Last for <1 hr (in microseconds)
    keys: [keys.cookieKey]
  })
);

require('./models/user');
require('./services/passport'); //Passport config

app.use(morgan('dev')); // Log every req to the console
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.urlencoded());
app.use(express.json());

require('./routes/authRoutes')(app); //Google oauth routes

app.get('/', (req, res) => {
  res.send('<h1>Home Route</h1>');
});

app.get('/api/get_current_user', (req, res) => {
  res.send(req.user);
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// creates approporate tables and syncs them if already exists
sequelize
  .sync()
  .then(result => {
    //console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log('Server running on port: ', PORT);
});
