const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/../dist'));
app.use('/:id', express.static(__dirname + '/../dist'));


module.exports = app;