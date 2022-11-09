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
  it.skip('return book detail with input id', async () => {
    const res = await request(app).get('/books/1');
    const test = {
      id: '1',
      title: 'The Fellowship of the Ring',
      released: '1954'
    };
    expect(res.body).toEqual(test);
  });

  // test 4 show author detail
  it.skip('return author detail with input id', async () => {
    const res = await request(app).get('/authors/2');
    const test = {
      id: '2',
      full_name: 'Steven King',
      dob: '09-21-1947',
      pob: 'Maine'
    };
    expect(res.body).toEqual(test);
  });

  // test 5 show author detail with books!
  it('return author detail with input id with books', async () => {
    const res = await request(app).get('/authors/2');
    expect(res.body).toEqual({
      id: expect.any(String),
      full_name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      books: expect.any(Array),
    });
  });

  //test 6 shows book detail with authors!
  it('return author detail with input id with books', async () => {
    const res = await request(app).get('/books/2');
    expect(res.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(String),
      authors: expect.any(Array),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
