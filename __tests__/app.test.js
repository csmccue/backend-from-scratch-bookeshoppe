const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  // test 1 show all books
  it('return all books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(6);
  });





  afterAll(() => {
    pool.end();
  });
});
