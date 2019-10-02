const express = require('express');
require('./services/passport'); //Passport config

const app = express();

require('./routes/authRoutes')(app); //Google oauth routes

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log('Server running on port: ', PORT);
});
