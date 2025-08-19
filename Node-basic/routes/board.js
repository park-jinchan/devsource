//routes/board.js
const express = require('express');
const router = express.Router();

// /boards
router.get('/', (req, res) => {
    res.send(`<h1>Board List</h1>`);
});

// /boards/123
router.get('/:id', (req, res) => {
    res.send(`<h1>Board View</h1>
        <h2>글번호:${req.params.id} </h2>
        `);
});

module.exports = router;
