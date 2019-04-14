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
