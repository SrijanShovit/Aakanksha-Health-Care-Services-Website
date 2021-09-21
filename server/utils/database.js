const Sequelize = require('sequelize');

const sequelize = new Sequelize('healthcaredb', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});

module.exports = sequelize;
