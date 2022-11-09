const pool = require('../utils/pool');
// const { Book } = require('./Books');

class Author {
  id;
  full_name;
  dob;
  pob;

  constructor(row) {
    this.id = row.id;
    this.full_name = row.full_name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from authors');
    return rows.map((newRow) => new Author(newRow));
  }

  static async getAuthorByID(id) {
    const { rows } = await pool.query('SELECT * from authors where id = $1', [id]);
    return new Author(rows[0]);
  }

}
module.exports = { Author };

