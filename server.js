const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');

require('./models/User');
require('./services/passport'); //Passport config

const app = express();
//app.use(passport.initialize());

require('./routes/authRoutes')(app); //Google oauth routes

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log('Server running on port: ', PORT);
});
