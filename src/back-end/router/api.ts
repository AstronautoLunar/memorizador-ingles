import express from "express";
import bodyParser from "body-parser";
import { 
    getWords,
    addWord,
    modifyWord,
    deleteWord
} from "../models/words";

const router = express.Router();

router.get("/getWords", getWords);

router.post("/addWord", bodyParser.json(), addWord);

router.put("/modifyWord", bodyParser.json(), modifyWord);

router.delete("/deleteWord", bodyParser.json(), deleteWord);

export default router;