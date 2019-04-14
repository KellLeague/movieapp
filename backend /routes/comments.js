const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comments');

//GET COMMENT INFO
commentRouter.get('/all', (req, res, next)=> {
    CommentService.readAll()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});
