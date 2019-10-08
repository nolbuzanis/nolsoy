const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');

const sequelize = require('./services/database');

require('./models/user');
require('./services/passport'); //Passport config

const app = express();
app.use(passport.initialize());

require('./routes/authRoutes')(app); //Google oauth routes

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
