const { Router } = require('express');
const { Author } = require('../models/Authors');

module.exports = Router() 
  .get('/', async (req, res) => {
    const group = await Author.getAll();
    const filtered = group.map(({
      id,
      full_name,
      dob,
      pob,
    }) => ({
      id,
      full_name,
      dob,
      pob,
    }));
    res.json(filtered);
  })

  .get('/:id', async (req, res) => {
    const single = await Author.getAuthorByID(req.params.id);
    res.json(single);
  })





;
