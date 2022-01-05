import { Request, Response } from "express";
import { validateBodyModifyWord } from "../../../utils";
import { data } from "../../../../data";
import { BodyModifyWordProps } from "../../../@types";
import fileSystem from "fs";
import path from "path";

const modifyWord = (
    request: Request, 
    response: Response
) => {
    const isPassed = validateBodyModifyWord(request);
    const {
        id,
        US,
        BR
    }: BodyModifyWordProps = request.body;

    if(!isPassed) {
        response.status(400).send("Sua requisição não passou da validação de tipos");
    } else {
        const newData = data;

        const indexObject = newData.words.findIndex(item => item.id === id);
        
        const objectSelected = newData.words[indexObject];

        newData.words[indexObject]= { 
            ...objectSelected, 
            US,
            BR
        }

        response.end();

        fileSystem.writeFileSync(
            path.join(__dirname, "..", "..", "..", "..", "data", "data.json"),
            JSON.stringify(newData),
            "utf-8"
        )
    }

}

export default modifyWord;