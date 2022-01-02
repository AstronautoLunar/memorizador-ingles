import express from "express";
import bodyParser from "body-parser";
import { 
    getWords 
} from "../models/word";

const router = express.Router();

router.get("/getWords", getWords);

export default router;