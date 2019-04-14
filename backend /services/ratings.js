const db = require('./dbConnect');
const RatingService = {};

//READ
RatingService.readAll = () => {
    const sql = `
    SELECT *
    FROM ratings  
    `;
    return db.any(sql);
};
RatingService.read = (id) => {
    const sql = `
    SELECT *
    FROM ratings
    WHERE
    ratings.id = $[id]  
    `;
    return db.any(sql, {id});
};

//CREATE
RatingService.create = ( stars, movie_id) => {
    const sql = `
    INSERT INTO
    ratings ( stars, movie_id)
    VALUES
    ($[stars], $[movie_id]);
    RETURNING id
    `;
    return db.one(sql, {stars, movie_id});
};

//UPDATED
RatingService.update = ( id, stars, movie_id) => {
    const sql = `
    UPDATE
    ratings
    SET
    stars = $[stars],
    movie_id = $[movie_id]
    WHERE
    ratings.id =$[id]
    `;
    return db.one(sql, {id, stars, movie_id});
};
