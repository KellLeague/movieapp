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


//UPDATE
genreService.update = (id, genre) => {
    const sql =`
    UPDATE
    genres
    SET
    genre = $[genre]
      WHERE
      genres.id = $[id]
    `;
    return db.none(sql, {id, genre});
};

//DELETE
genreService.delete = (id) => {
    const sql = `
    DELETE FROM
    genres
    WHERE
    id = $[id]
    `;
    return db.none(sql, { id });
};

module.exports = genreService;