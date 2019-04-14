const db = require('./dbConnect')
const movieService = {}

movieService.create = (title, genre_id, img_url) => {
    const sql=`
    INSERT INTO movies(title, genre_id, img_url)
    VALUES ($[title], $[genre_id], $[img_url])
    RETURNING id`;
    return db.one (sql, {title, genre_id, img_url})
}

movieService.read = (id) => {
    const sql = `
    SELECT *
    FROM movies
    WHERE id=$[id]`
    return db.one(sql, {id})
}

movieService.readAll = () => {
    const sql = `
    SELECT * 
    FROM movies`
    return db.any(sql,{id})
}





model.exports = movieService;