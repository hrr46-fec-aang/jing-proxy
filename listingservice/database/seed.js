const db = require('./index.js');
const Site = require('./Site.js');
const faker = require('faker');


// create 100 site entries in the dB
const addExData = function() {
  for (var i = 1; i < 101; i++) {
    var dataEntry = {
      id: i,
      host: {
        name: faker.name.firstName(),
        image: faker.image.avatar(),
        status: faker.random.boolean()
      },
      site: {
        state: faker.address.state(),
        prop: faker.lorem.words(),
        site: faker.lorem.word(),
        desc: faker.lorem.paragraphs(3)
      },
      info: {
        area: {
          lodge: faker.lorem.word(),
          sites: faker.random.number(10) + ' sites',
          guests: faker.random.number(100) + ' guests',
          parking: faker.lorem.word(),
          ada: faker.lorem.word(),
        },
        ess: { // essentials
          fire: faker.lorem.word(),
          toilet: faker.lorem.word(),
          pets: faker.lorem.word(),
        },
        amnt: { // amenities
          water: faker.lorem.word(),
          picnic: faker.lorem.word(),
          kitchen: faker.lorem.word(),
          shower: faker.lorem.word(),
          wifi: faker.lorem.word(),
          trash: faker.lorem.word()
        }
      },
      details: {
        in: faker.lorem.words(),
        out: faker.lorem.words(),
        canc: faker.lorem.word(),
        arrv: faker.lorem.words(),
        min: faker.random.number({min: 0, max: 100}),
        book: faker.random.number({min: 0, max: 12})
      },
      acts: [ // activities
        {
          title: faker.lorem.word(),
          desc: faker.lorem.paragraph()
        },
        {
          title: faker.lorem.word(),
          desc: faker.lorem.sentence()
        },
        {
          title: faker.lorem.word(),
          desc: faker.lorem.sentence()
        }
      ],
      feats: [ // features
        {
          title: faker.lorem.words(),
          desc: faker.lorem.sentence()
        },
        {
          title: faker.lorem.words(),
          desc: faker.lorem.sentence()
        },
        {
          title: faker.lorem.words(),
          desc: faker.lorem.sentence()
        }
      ],
      vibe: {
        elev: faker.random.number({min: 0, max: 14000}), // elevation of campsite
        temp: faker.random.number({min: 30, max: 100}), // temperature at campsite
        dist: faker.random.number(100) // distance to campsite
      }
    };
    Site.create(dataEntry)
      .then(() => db.close())
      .catch(err => console.log(err));
  }
};

// invoke function to seed data
addExData();