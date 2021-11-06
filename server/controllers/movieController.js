const db = require("../db.json");

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(db);
  },
  createMovie: (req, res) => {
    const { title, rating, imageURL } = req.body;

    if (!title || !rating || !imageURL) {
      return res.status(400).send("Missing one of the required fields");
    }
    //if the input cannot be cohorsed into a number then send this invalid code
    if (isNaN(+rating)) {
      return res.status(400).send("invalid input for rating.");
    }

    const newMovie = { title, rating, imageURL };

    db.push(newMovie);

    res.status(201).send(db);
  },
};
