const { Router } = require('express');
const movies = require('../api.json');
const underscore = require("underscore");
const router = Router();

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, year, rating } = req.body;

    if (title && year && rating) {
        const id = (movies.length + 1);
        const newMovies = { id, ...req.body };
        movies.push(newMovies);
        res.json(movies);
    } else {
        res.status(500).json({ "error": "There was an error." });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    underscore.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    })
    console.log(req.params);
    res.send(movies);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, year, rating } = req.body;

    if (title && year && rating) {
        underscore.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({ error: "There was an error!" });
    }
});


module.exports = router;