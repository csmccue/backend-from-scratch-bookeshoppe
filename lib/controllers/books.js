const { Router } = require('express');
const { Book } = require('../models/Books');


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

  .get('/:id', async (req, res) => {
    const book = await Book.getByID(req.params.id);
    res.json(book);
  })


;
