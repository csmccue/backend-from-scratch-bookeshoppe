const pool = require('../utils/pool');
const { Author } = require('./Authors');


class Book {
  id;
  title;
  released;
  authors;

  constructor(row) {
    this.is = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors.length > 0 ? row.authors.map((person) => new Author(person)) : [];
  }

  static async getAll() {
    const { rows } = await pool.query(`SELECT  * from
    books left join authors_books
      on books.id = authors_books.book_id
    left join authors on authors.id = authors_books.author_id;
    `);
    return rows.map((newRow) => new Book(newRow));
  }
}
module.exports = { Book };
