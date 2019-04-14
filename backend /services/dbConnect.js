const pgp = require ('pg-promise')({})
const db = pgp ('postgress://localhost/movieapp');

module.exports = db;
