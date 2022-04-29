DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    -- KEY
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT NOT NULL,
    review_text TEXT,
    movie_id INT,
    -- KEYS
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE SET NULL
);