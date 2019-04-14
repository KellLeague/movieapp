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

//CREATE
genreService.create = (genre) => {
    const sql = `
    INSERT INTO 
    genres (genre)
    VALUE
    ($[genre])
    RETURNING id
    `;
    return db.one(sql, { genre });
};