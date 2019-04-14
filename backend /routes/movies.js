const express = require('express')
const app = express.Router();
const movieService = require('../services/movies')

app.get('/',(req,res) => {
movieService.readAll()
.then (data => res.send (data))
}) 

// app.get('/byGenre',(req,res) => {

// }) 

app.get('/:id',(req,res) => {
    const {id} = req.params
movieService.read()
.then (data => res.send(data) )
})

module.exports = app;