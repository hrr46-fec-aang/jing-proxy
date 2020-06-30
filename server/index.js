const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
// app.use(express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
let port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});
