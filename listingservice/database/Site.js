const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const siteSchema = new mongoose.Schema({
  id: Number,
  host: {
    name: String,
    image: String,
    status: Boolean
  },
  site: {
    state: String,
    prop: String,
    site: String,
    desc: String
  },
  info: {
    area: {
      lodge: String,
      sites: String,
      guests: String,
      parking: String,
      ada: String
    },
    ess: { // essentials
      fire: String,
      toilet: String,
      pets: String
    },
    amnt: { // amenities
      water: String,
      picnic: String,
      kitchen: String,
      shower: String,
      wifi: String,
      trash: String
    }
  },
  details: {
    in: String,
    out: String,
    canc: String,
    arrv: String,
    min: Number,
    book: Number
  },
  acts: [ // activities
    {
      title: String,
      desc: String
    }],
  feats: [ // features
    {
      title: String,
      desc: String
    }],
  vibe: {
    elev: Number, // elevation of campsite
    temp: Number, // temperature at campsite
    dist: Number // distance to campsite
  }
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;