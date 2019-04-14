const express = require('express');
const genreRouter = express.Router();
const genreService = require('../services/genres');


// GET GENRE
genreRouter.get('/', (req, res, next) => {
    
    genreService.read()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});