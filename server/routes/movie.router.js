const express = require('express');
const pool = require('..modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'Select * FROM movies_genres';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT movie query', error);
            resl.sendStatus(500);

        });
});









module.exports = router;