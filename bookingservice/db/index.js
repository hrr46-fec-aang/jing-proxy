var Sequelize = require('sequelize');
var db = new Sequelize('booking', 'root', 'root', {
  dialect: 'mysql'
});


module.exports = db;