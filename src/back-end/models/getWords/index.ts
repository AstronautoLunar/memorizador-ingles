import { 
    Request, 
    Response 
} from "express";
import data from "../../../data/index.json";

const getWords = (
    request: Request, 
    response: Response
): void => {
    response.json(JSON.stringify(data));
}

export default getWords;