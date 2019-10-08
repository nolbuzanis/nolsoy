const Sequalize = require('sequelize');

// Open the connection
const sequelize = new Sequalize('nolsoy', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
