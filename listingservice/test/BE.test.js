/**
 * @jest-environment node
 */

const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
mongoose.promise = global.Promise;
const Sites = require('../database/Site.js');

// ******* Tests ******* //
describe('tests server', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/test`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await db.close();
  });

  it('should find the campsite by url id', async (done) => {
    const res = await request.get('/site/82');
    expect(res.body.id).toBe(82);
    done();
  });

  it('should not find a campsite for nonexistent id', async (done) => {
    const res = await request.get('/site/182');
    expect(res.text).toEqual('Not found');
    done();
  });

});

module.exports = {
  supertest: supertest
}