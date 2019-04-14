const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const movies = require('./routes/movies')
const MovieServices = require('./services/movies');


app.use('/movies',movies)

const port = 4000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

