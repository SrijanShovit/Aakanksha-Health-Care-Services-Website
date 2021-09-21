const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Camp = sequelize.define('camp', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  image_name: Sequelize.STRING,
  city: Sequelize.STRING,
  latitude:Sequelize.DOUBLE,
  longitude:Sequelize.DOUBLE,
  description: {
    type: Sequelize.STRING,
  },
  
});

module.exports = Camp;