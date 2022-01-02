import express from "express";
import path from "path";

const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, "src", "front-end")));

app.listen(PORT, () => console.log(`localhost:${PORT}`));