const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'test1234', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
