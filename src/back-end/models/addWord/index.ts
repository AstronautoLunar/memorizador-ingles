import { 
    Request,
    Response
} from "express";
import data from "../../../data/index.json";
import { 
    RequestBodyAddWord 
} from "./types";
import { validateBody } from "./utils";

const addWord = (
    request: Request,
    response: Response
) => {
    const isPassedRequest = validateBody(request);

    response.send("test");
}

export default addWord;