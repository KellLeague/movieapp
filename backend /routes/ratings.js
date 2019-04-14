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