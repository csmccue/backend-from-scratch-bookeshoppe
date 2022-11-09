const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  // test 1 show all books
  it.skip('return all books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(6);
  });

  // test 2 show all authors
  it.skip('return all authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(2);
  });

  // test 3 show book detail
  it('return book detail with input id', async () => {
    const res = await request(app).get('/books/1');
    const test = {
      id: '1',
      title: 'The Fellowship of the Ring',
      released: '1954'
    };
    expect(res.body).toEqual(test);
  });



  afterAll(() => {
    pool.end();
  });
});
