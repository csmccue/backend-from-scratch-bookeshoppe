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
}
module.exports = { Author };

