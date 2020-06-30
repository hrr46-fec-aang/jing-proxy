const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/listing';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;