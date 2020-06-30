const request = require('supertest');
const app = require('../server/index.js');
const db = require('../db/index.js');
const sequelize = require('sequelize');

beforeAll(async () => {
  await db.authenticate();
  console.log('Connection has been established successfully.');

});

afterAll(async () => {
  await db.close();

});
// endpoint tests
describe("Test endpoints", () => {
  test("It should respond to the GET method for root(/)", async (done) => {
    await request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test("It should respond to the GET method for booking data(/booking/1", async (done) => {
    await request(app)
      .get('/booking/1')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

// db tests
describe("Test data retrieval for specific id", () => {
  test("It should return a data with the id = 1", async (done) => {
    await request(app)
      .get('/booking/1')
      .then(res => {
        expect(res.body[0].id).toBe(1);
        expect(res.body.length).not.toBe(0);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('price');
        expect(res.body[0]).toHaveProperty('listingName');
        expect(res.body[0]).toHaveProperty('bookingName');
        expect(res.body[0]).toHaveProperty('arrive');
        expect(res.body[0]).toHaveProperty('depart');
        expect(res.body[0]).toHaveProperty('groupsize');
        expect(res.body[0]).toHaveProperty('subtotal');
        done();
      });
  });
  test("It should return a data with the id = 23", async (done) => {
    await request(app)
      .get('/booking/23')
      .then(res => {
        expect(res.body[0].id).toBe(23);
        expect(res.body.length).not.toBe(0);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('price');
        expect(res.body[0]).toHaveProperty('listingName');
        expect(res.body[0]).toHaveProperty('bookingName');
        expect(res.body[0]).toHaveProperty('arrive');
        expect(res.body[0]).toHaveProperty('depart');
        expect(res.body[0]).toHaveProperty('groupsize');
        expect(res.body[0]).toHaveProperty('subtotal');
        done();
      });
  });
  test("It should return a data with the id = 47", async (done) => {
    await request(app)
      .get('/booking/47')
      .then(res => {
        expect(res.body[0].id).toBe(47);
        expect(res.body.length).not.toBe(0);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('price');
        expect(res.body[0]).toHaveProperty('listingName');
        expect(res.body[0]).toHaveProperty('bookingName');
        expect(res.body[0]).toHaveProperty('arrive');
        expect(res.body[0]).toHaveProperty('depart');
        expect(res.body[0]).toHaveProperty('groupsize');
        expect(res.body[0]).toHaveProperty('subtotal');
        done();
      });
  });
});

describe("Testing for nonexisting data", () => {
  test("It should return blank when requesting nonexisting data", async (done) => {
    await request(app)
      .get('/booking/123')
      .then(res => {
        expect(res.body).toEqual([]);
        expect(res.body.length).toEqual(0);
        done();
      });
  });
  test("It should return blank when requesting nonexisting data", async (done) => {
    await request(app)
      .get('/booking/223')
      .then(res => {
        expect(res.body).toEqual([]);
        expect(res.body.length).toEqual(0);
        done();
      });
  });
  test("It should return blank when requesting nonexisting data", async (done) => {
    await request(app)
      .get('/booking/0')
      .then(res => {
        expect(res.body).toEqual([]);
        expect(res.body.length).toEqual(0);
        done();
      });
  });
});