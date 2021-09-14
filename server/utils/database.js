const Sequelize = require('sequelize');

const sequelize = new Sequelize('healthcaredb', 'root', 'test1234', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});

module.exports = sequelize;
