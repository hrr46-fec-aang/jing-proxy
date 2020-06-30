var Sequelize = require('sequelize');
var db = new Sequelize('booking', 'root', null, {
  dialect: 'mysql',
});

module.exports = db;
