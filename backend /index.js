const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4000;


const movieRouter = require('./routes/movies');
const genreRouter = require('./routes/genres');
const ratingRouter = require('./routes/ratings');
const commentRouter = require('./routes/comments');
// const MovieServices = require('./services/movies');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/movies', movieRouter);
app.use('/genres', genreRouter);
app.use('/ratings', ratingRouter);
app.use('/comments', commentRouter);

app.use((err, req, res, next)=>{
    res.status(400).json({error: err.toString() });
});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

