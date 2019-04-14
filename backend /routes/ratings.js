const express = require('express');
const ratingRouter = express.Router();
const RatingService = require('../services/ratings');

// Get rating info 
ratingRouter.get('/all', (req, res, next)=>{
    RatingService.readAll()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});

ratingRouter.get('/:id', (req, res, next)=>{

    const { id } = req.params;

    RatingService.read(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});
