import { Request, Response } from "express";
import fileSystem from "fs";
import path from "path";

import { 
    BodyDeleteWordProps, 
    WordsProps 
} from "../../../@types";
import { data } from "../../../../data";
import { createTodayDate } from "../../../utils";

const deleteWord = (
    request: Request, 
    response: Response
) => {
    const {
        listId
    }: BodyDeleteWordProps = request.body;

    const isListIdArray = Array.isArray(listId);

    if(!isListIdArray) {
        response.status(400).send("Tipo invalido de 'listId'");
    } else if (!listId.length) {
        response.status(400).send("Nenhum card para remover");
    } else {
        const newData = data;
        let newWords: WordsProps[] = [];

        for(let id of listId) {
            newWords = newData.words.filter(item => item.id !== id);

            newData.words = newWords;
        }

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
        );
    }
}

export default deleteWord;