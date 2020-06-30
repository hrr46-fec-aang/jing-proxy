const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());

const Sites = require('../database/Site.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/site/:id', function(req, res) {
  console.log('site id: ', req.params);

  var siteID = req.params.id;
  var query = Sites.where({id: siteID});
  query.findOne(function(err, site) {
    if (err) {
      return err;
    }
    if (site) {
      console.log('site host:', site.host.name);
      res.send(site);
    } else {
      res.send('Not found');
    }
  });

});

module.exports = app;