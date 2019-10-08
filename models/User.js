const Sequelize = require('sequelize');

// Import database instance
const sequelize = require('../services/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  googleId: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  spotifyURI: Sequelize.STRING
});

module.exports = User;
