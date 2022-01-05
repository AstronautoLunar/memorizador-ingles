import { Request, Response } from "express";
import { BodyDeleteWordProps } from "../../../@types";
import { data } from "../../../../data";
import fileSystem from "fs";
import path from "path";

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
    }
}

export default deleteWord;