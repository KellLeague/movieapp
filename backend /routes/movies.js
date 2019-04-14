const express = require('express')
const app = express.Router();
const movieService = require('../services/movies')

//CREATE
app.post('/', (req, res, next) => {
    //req.body
    const {title, genre_id, img_url} = req.params;
    movieService.create(title, genre_id, img_url)
    .then(data => {
        res.json({data})
    })
    .catch(err => console.log(err))
})

// app.get('/byGenre',(req,res) => {

// }) 
//READ
app.get('/', (req, res)=>{
    movieService.readAll()
    .then (data => res.send(data))
.catch(err => console.log(err))
})




module.exports = app;