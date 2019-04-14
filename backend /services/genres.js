const db = require('./dbConnect');
const genreService = {};

//READ
genreService.read = () => {
    const sql = `
    SELECT *
    FROM genres
    `;
    return db.any(sql);
};
