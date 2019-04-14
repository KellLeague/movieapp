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
