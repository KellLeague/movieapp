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

//CREATE GENRE
genreRouter.post('/', (req, res, next) => {
    const { genre } =res.body;

    genreService.create(genre)
    .then(data =>{
        res.json(`Success: Product created with id: ${data.id}`); 

    })
    .catch(err =>{
        next(err);
    });
});
