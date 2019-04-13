DROP DATABASE IF EXISTS movieapp;
CREATE DATABASE movieapp;

\c movieapp;

CREATE TABLE movies (
id SERIAL PRIMARY KEY ,
title VARCHAR NOT NULL,
genre_id INTEGER UNIQUE ,
img_url VARCHAR NOT NULL
);

CREATE TABLE genres (
  id INTEGER REFERENCES movies(genre_id),
  genre VARCHAR NOT NULL
);

CREATE TABLE ratings(
    id SERIAL PRIMARY KEY NOT NULL,
    stars INTEGER NULL,
    movie_id INTEGER REFERENCES movies(id)

);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL ,
    text TEXT NOT NULL,
    movie_id INTEGER REFERENCES movies(id)
);

INSERT INTO movies(title, genre_id, img_url) 
VALUES ('The Meg',1, 'https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_.jpg'),
('Into the Woods',2, 'https://m.media-amazon.com/images/M/MV5BMTY4MzQ4OTY3NF5BMl5BanBnXkFtZTgwNjM5MDI3MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg'),
('Paid in Full',3, 'https://m.media-amazon.com/images/M/MV5BOTQ1NTUwNTAzN15BMl5BanBnXkFtZTYwMzM0Njk5._V1_.jpg'),
('Pootie Tang',4,'https://m.media-amazon.com/images/M/MV5BMWY2ZGU3ZDAtN2NhMy00NjRjLWE5ZDgtZTRlM2QxMTBjZWYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'),
('Jaws',5, 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX651_CR0,0,651,999_AL_.jpg'),
('Jurassic World: Fallen Kingdom',6, 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_.jpg'),
('47 Meters Down',7,'https://m.media-amazon.com/images/M/MV5BOGJlNDJkZmEtMjUwNS00ZWViLWIyZGEtN2Y5ZjZlNDE1NWJkXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY1000_SX675_AL_.jpg'),
('Boyz N The Hood',8, 'https://m.media-amazon.com/images/M/MV5BZmRjNDI5NTgtOTIwMC00MzJhLWI4ZTYtMmU0ZTE3ZmRkZDNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg'),
('Straight Outta Compton',9,'https://m.media-amazon.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_.jpg'),
('CoCo',10,'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SY1000_CR0,0,699,1000_AL_.jpg');

INSERT INTO genres ( id, genre ) 
VALUES (3,'Action'),
(10,'Animation'),
(6,'Adventure'),
(4,'Comedy'),
(1, 'Thriller');

