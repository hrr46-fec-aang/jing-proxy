const Sequelize = require('sequelize');
const db = require('./index.js');
const faker = require('faker');

const insertSampleListings = function() {
  for (var i = 1; i < 101; i ++) {
  db.query(`insert into listings (listingName, price, maximum) values ("${faker.name.firstName()+ '\'s '+ faker.commerce.color() + ' lodge in ' + faker.address.country()}", ${Math.floor(Math.random() * (150 - 50)) + 50}, ${Math.floor(Math.random() * (12 - 5)) + 5})`)
  .then(() => db.close());
  }
};

const insertSampleBookings = function() {
  for (var i = 1; i < 101; i ++) {
      db.query(`insert into bookings (bookingName, arrive, depart, groupsize, subtotal, listingID) values ("${faker.name.firstName() + ' ' + faker.name.lastName()}", "${faker.date.between('2020-07-01', '2020-07-03')}"
      , "${faker.date.between('2020-07-03', '2020-07-05')}", ${Math.floor(Math.random() * (8 - 1)) + 1}, ${Math.floor(Math.random() * (1000 - 50)) + 50}, ${i})`)
      .then(() => db.close());
      }
}
insertSampleListings();

insertSampleBookings();
