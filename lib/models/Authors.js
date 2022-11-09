const pool = require('../utils/pool');
// const { Book } = require('./Books');

class Author {
  id;
  full_name;
  dob;
  pob;
  books;

  constructor(row) {
    this.id = row.id;
    this.full_name = row.full_name;
    this.dob = row.dob;
    this.pob = row.pob;
    this.books = row.books;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from authors');
    return rows.map((newRow) => new Author(newRow));
  }

  static async getAuthorByID(id) {
    const { rows } = await pool.query(`
    select authors.*,
    coalesce(
        json_agg(to_jsonb(books))
        filter (WHERE books.id IS NOT NULL), '[]') as books
    from authors left join authors_books
      on authors.id = authors_books.author_id
    left join books on books.id = authors_books.book_id
    where authors.id = $1
    group by authors.id
    `, [id]);
    return new Author(rows[0]);
  }

}
module.exports = { Author };

