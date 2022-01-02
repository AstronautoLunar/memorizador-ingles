import express from "express";
import path from "path";
import router from "./src/back-end/router/api";

const app = express();
const PORT = 4444;

app.use("/api", router);
app.use(express.static(path.join(__dirname, "src", "front-end")));

app.listen(PORT, () => console.log(`localhost:${PORT}`));