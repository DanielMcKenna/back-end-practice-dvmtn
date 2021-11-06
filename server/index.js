const express = require("express");
const cors = require("cors");
const userCtrl = require("./controllers/movieController");
const PORT = 4004;

const app = express();

app.use(cors());
app.use(express.json()); // this allows us to parse JSON into a javascript object that we access at req.body

app.get("/api/movies", userCtrl.getMovies);
app.post("/api/movies", userCtrl.createMovie);

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));
