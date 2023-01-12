const { Router } = require('express');
const movies = require('../api.json');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "nickname": "Corvier",
        "github": "https://github.com/Corvier",
    };
    res.json(movies);
});

router.post('/', (req, res) => {
    // console.log(req.body[1]);
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


module.exports = router;