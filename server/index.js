const express = require("express");

const app = express();
const PORT = 4004;

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));
