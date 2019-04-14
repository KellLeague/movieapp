const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const MovieServices = require('./services/movies');

const port = 4000;
app.listen(port, () => {
    console.log('listening to port' + ${port})
})