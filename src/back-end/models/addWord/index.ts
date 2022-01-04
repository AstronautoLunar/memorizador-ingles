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

        fileSystem.writeFileSync(
            path.join(__dirname, "..", "..", "..", "data", "data.json"),
            JSON.stringify(newData),
            "utf-8"
        )

        response.status(200).send("Salvo com sucesso");
    }

}

export default addWord;