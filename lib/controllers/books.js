const { Router } = require('express');


module.exports = Router()
  .get('/', async (req, res) => {
    const bookcase = await Book.getAll();
    const filtered = bookcase.map(({
      id,
      title,
      released 
    }) => ({
      id,
      title,
      released
    }));
    res.json(filtered);
  })
;
