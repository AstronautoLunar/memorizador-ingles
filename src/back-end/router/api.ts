import express from "express";
import bodyParser from "body-parser";
import { 
    getWords,
    addWord
} from "../models";

const router = express.Router();

router.get("/getWords", getWords);

router.post("/addWord", bodyParser.json(), addWord);

export default router;