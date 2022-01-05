import express from "express";
import bodyParser from "body-parser";
import { 
    getWords,
    addWord,
    modifyWord
} from "../models";

const router = express.Router();

router.get("/getWords", getWords);

router.post("/addWord", bodyParser.json(), addWord);

router.put("/modifyWord", bodyParser.json(),modifyWord);

export default router;