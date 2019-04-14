const db = require('./dbConnect')
const movieService = {}

movieService.create = (title, genre_id, img_url) => {
    const sql=`
    INSERT INTO movies(title, genre_id, img_url)
    VALUES ($[title], $[genre_id], $[img_url])
    RETURNING id`;
    return db.one (sql, {title, genre_id, img_url})
}



model.exports = movieService;