const Sequalize = require('sequelize');
const keys = require('./keys');

// Open the connection
const sequelize = new Sequalize('nolsoy-dev', 'root', keys.mySqlPassword, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
