const Sequelize = require('sequelize');

// Import database instance
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  hash: Sequelize.STRING,
  googleId: Sequelize.STRING,
  name: Sequelize.STRING,
  googleEmail: Sequelize.STRING,
  spotifyURI: Sequelize.STRING
});

module.exports = User;
