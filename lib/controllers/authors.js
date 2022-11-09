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
;
