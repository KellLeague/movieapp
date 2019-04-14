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
