let db = require("../db.json");
let globalID = 11;

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(db);
  },
  createMovie: (req, res) => {
    const { id, title, rating, imageURL } = req.body;

    if (!title || !rating || !imageURL) {
      return res.status(400).send("Missing one of the required fields");
    }
    //if the input cannot be cohorsed into a number then send this invalid code
    if (isNaN(+rating)) {
      return res.status(400).send("invalid input for rating.");
    }
    // this global id takes the id from the varibable line 2
    const newMovie = { id: globalID, title, rating, imageURL };
    globalID++;
    db.push(newMovie);

    res.status(201).send(db);
  },
  deleteMovie: (req, res) => {
    const movieID = +req.params.id;

    // if the movie enters a falsy statment it will remove it
    const filteredMovies = db.filter((movie) => {
      return movieID !== movie.id;
    });

    //reasigning the new database
    db = filteredMovies;

    res.status(200).send(filteredMovies);

    //option two: using splice

    // for (let i = 0; i < db.length; i++) {
    //   if (db[i].id === movieID) {
    //     db.splice(i, 1);
    //   }
    // }
    // res.status(200).send(db);
  },

  updateMovie: (req, res) => {
    const movieID = +req.params.id;
    //grabs the rating off of body
    const { type } = req.body;

    for (let i = 0; i < db.length; i++) {
      if (db[i].id === movieID) {
        let rating = db[i].rating; //copies the value
        if (type === "plus") {
          if (rating === 5) {
            return res.status(400).send("cannot increment beyond 5.");
          }
          db[i].rating++;
        } else {
          if (rating === 1) {
            return res.status(400).send("cannot decremnt beyond 1");
          }
          db[i].rating--;
        }
      }
    }

    res.status(200).send(db);
  },
};
