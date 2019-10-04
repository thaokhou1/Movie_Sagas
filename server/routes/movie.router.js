const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/', (req, res) => {
    const queryText =   `SELECT * FROM "movies";`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT movie query', error);
            resl.sendStatus(500);

        });
});


router.get('/details/:id', (req, res) => {
    const queryText = 'SELECT * FROM movies WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });

  router.put('/', (req, res) => {
    const updatedMovie = req.body;
    console.log(updatedMovie);
    const queryText = `UPDATE movies
    SET "title" = $1, 
    "description" = $2
    WHERE "id"=$3;`;
  
    const queryValues = [
      updatedMovie.title,
      updatedMovie.description,
      updatedMovie.id,

    ];
  
    pool.query(queryText, [
      updatedMovie.title,
      updatedMovie.description,
      updatedMovie.id,])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing movies query', err);
        res.sendStatus(500);
      });
  });







module.exports = router;