const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  tag: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  inCart: Sequelize.INTEGER,
});

module.exports = Product;
