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
