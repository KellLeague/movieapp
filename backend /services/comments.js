const db = require('./dbConnect');
const CommentService = {};

//READ

CommentService.readAll = () => {
    const sql = `
    SELECT *
    FROM comments
    `;
    return db.any(sql);
};


CommentService.read = (id) => {
    const sql = `
    SELECT *
    FROM comments
    WHERE
    comments.id = $[id]
    `;
    return db.any(sql, { id });
};


//CREATE
CommentService.create = (text, movie_id) => {
    const sql = `
    INSERT INTO
    comments (text, movie_id)
    VALUES
    ($[text] $[movie_id])
    RETURNING id
    `;
    return db.one(sql, { text, movie_id});
};

//UPDATE
CommentService.update = (id, text, movie_id) => {
    const sql =`
    UPDATE
    comments
    SET
    text = $[text],
    movie_id = $[movie_id]
    WHERE
    comments.id = $[id]
    `;
    return db.none(sql, {id, text, movie_id});
};



//DELETE
CommentService.delete = (id) =>  {
    const sql = `
    DELETE FROM
    comments
    WHERE
    id = $[id]
    `;
    return db.none(sql, { id });
};

module.exports = CommentService;
