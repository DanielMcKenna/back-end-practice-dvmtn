module.exports = {
  getMovies: (req, res) => {
    console.log("We got a request");

    res.sendStatus(200);
  },
};
