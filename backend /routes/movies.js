const express = require('express')
const app = express.Router();
const movieService = require('../services/movies')

//CREATE
app.post('/', (req, res, next) => {
    const {title, genre_id, img_url} = req.body;
    console.log(res.body)
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

app.get('/:id',(req,res) => {
    const {id} = req.params
movieService.readEverything(id)
.then (data => res.send(data))
.catch(err => console.log(err))
})

app.get('/genre/:genre_id', (req, res)=>{
    const { genre_id } = req.params;
    movieService.readGenre(genre_id)
    .then (data => res.send(data))
.catch(err => console.log(err))
})

//UPDATE


module.exports = app;