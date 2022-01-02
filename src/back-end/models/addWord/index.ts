import { 
    Request,
    Response
} from "express";
import { 
    RequestBodyAddWord 
} from "./types";
import { validateBody } from "./utils";
import fileSystem from "fs";
import path from "path";
import { data } from "../../../data";

const addWord = (
    request: Request,
    response: Response
) => {
    const isPassedRequest = validateBody(request);
    const { 
        US,
        BR,
        date
    }: RequestBodyAddWord = request.body;

    if(!isPassedRequest) {
        response.status(400).send("Sua requisição não passou da validação");
    } else {
        const newData = data;

        newData.words.push({
            US,
            BR,
            date
        });

        fileSystem.writeFile(
            path.join(__dirname, "..", "..", "..", "data", "data.json"),
            JSON.stringify(newData),
            "utf-8",
            (err) => {
                console.log(err);
            }
        )

        // path.join("..", "..", "..", "data", "index.json")

        response.send("test");
    }

}

export default addWord;