import { 
    Request,
    Response
} from "express";
import { 
    RequestBodyAddWordProps 
} from "../../../@types";
import { 
    validateBodyAddWord,
    createDate,
    createID
} from "../../../utils";
import fileSystem from "fs";
import path from "path";
import { data } from "../../../../data";

const addWord = (
    request: Request,
    response: Response
) => {
    const isPassedRequest = validateBodyAddWord(request);
    const { 
        US,
        BR
    }: RequestBodyAddWordProps = request.body;

    if(!isPassedRequest) {
        response.status(400).send("Sua requisição não passou da validação");
    } else {
        const newData = data;
        createDate();

        newData.words.push({
            id: createID(),
            US,
            BR,
            date: createDate()
        });
        
        response.end();

        fileSystem.writeFileSync(
            path.join(__dirname, "..", "..", "..", "..", "data", "data.json"),
            JSON.stringify(newData),
            "utf-8"
        )
    }

}

export default addWord;