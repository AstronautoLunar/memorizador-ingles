const express = require("express");
const path = require("path");

const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, "src")));

app.listen(PORT, () => console.log(`localhost:${PORT}`));