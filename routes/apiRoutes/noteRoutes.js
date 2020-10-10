const router = require("express").Router();

const notes = require('../../db/db');

router.get('/db', (req, res) => {
    let saved = notes;
    res.json(saved);
})

module.exports = router;