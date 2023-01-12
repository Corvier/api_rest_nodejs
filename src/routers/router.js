const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({greeting:'Hello World!'}));
router.get('/test', (req, res) => {
    const data = {
        "nickname": "Corvier",
        "github": "https://github.com/Corvier",
    };
    res.json(data);
});


module.exports = router;