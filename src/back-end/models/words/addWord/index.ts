import { 
    Request,
    Response
} from "express";
import { 
    CheckDuplicateWordsProps,
    RequestBodyAddWordProps
} from "../../../@types";
import { 
    validateBodyAddWord,
    createDate,
    createID,
    checkDuplicateWords,
    createTodayDate
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

        return;
    } 

    const newWord: CheckDuplicateWordsProps = {
        US, 
        BR 
    }
    
    const isPassedWord = checkDuplicateWords(newWord);
    
    if(!isPassedWord) {
        response.status(400).send("Palavra já salva");

        return;
    }

    const newData = data;

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

    const currentDate = createTodayDate();

    const fileNameBackup = `backup-${currentDate}.json`;

    fileSystem.writeFileSync(
        path.join(__dirname, "..", "..", "..", "..", "data", "backup", fileNameBackup),
        JSON.stringify(newData),
        "utf-8"
    )
}

export default addWord;