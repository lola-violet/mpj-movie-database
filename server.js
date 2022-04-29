const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '396',
        database: 'movies_db'
    },
    console.log('Connected to the movie_db database.')
);

app.get('/', (req, res)=>{
    res.send("You've arrived.")
})

app.get('/api/movies', (req, res) =>{
    console.info("Get request received for movies");
    db.query('SELECT * FROM movies', (err, results)=>{
        if (err) {
            throw err;
        }
        console.log(results);
        res.json(results);
    })
});

app.post('/api/add-movie', (req, res) =>{
    console.info("Post request received to add movie");
    const newMovie = req.body.movie_name;
    db.query('INSERT INTO movies (name) VALUES (?)', newMovie, (err, results)=>{
        if (err) {
            throw err;
        }
        res.send("Movie added");
        console.info(results);
    })
})

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});