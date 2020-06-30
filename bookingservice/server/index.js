const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const Sequelize = require('sequelize');
const cors = require('cors');

const app = express();
app.use(morgan());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(__dirname + '/../dist'));
app.use('/:id', express.static(__dirname + '/../dist'));


app.get('/booking/:id', (req, res) => {
  console.log(req.params);
  if (req.params.id === 'favicon.ico') {
    res.send(200);
  }
  else {
    let id = req.params.id;
    db.query(`select * from bookings, listings where listings.id = ${id} and listings.id = listingID`, { type: Sequelize.QueryTypes.SELECT })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log('err');
      })
  }
})

app.post('/booking/:id', (req, res) => {
  var bookingName = req.body.bookingName;
  var arrive = req.body.arrive;
  var depart = req.body.depart;
  var groupsize = req.body.groupsize;
  var subtotal = req.body.subtotal;
  var listingID = req.params.id;
  console.log(listingID);
  db.query(`select * from bookings where listingID = ${listingID} and (arrive like "${arrive.slice(0, 10)}%" or arrive like "${depart.slice(0, 10)}%")`, { type: Sequelize.QueryTypes.SELECT })
    .then(data => {
      console.log(data);
      if (data.length !== 0) {
        console.log('Dates already taken!')
        res.send('Dates already taken!');
      } else {
        db.query(`insert into bookings (bookingName, arrive, depart, groupsize, subtotal, listingID) values ("${bookingName}", "${arrive}", "${depart}", ${groupsize}, ${subtotal}, ${listingID})`)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.send(400);
            console.log('err');
          })
      }
    })

})

module.exports = app;