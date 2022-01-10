import { Request, Response } from "express";
import fileSystem from "fs";
import path from "path";

import { BodyDeleteWordProps } from "../../../@types";
import { data } from "../../../../data";
import { createTodayDate } from "../../../utils";

const deleteWord = (
    request: Request, 
    response: Response
) => {
    const {
        id
    }: BodyDeleteWordProps = request.body;

    const isIdString = typeof id === "string";

    if(!isIdString) {
        response.status(400).send("O tipo id não é válido, somente é aceito do tipo texto");
    } else {
        const newData = data;

        const newWords = newData.words.filter(item => item.id !== id);

        newData.words = newWords

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