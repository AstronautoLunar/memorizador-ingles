import { Request, Response } from "express";
import { BodyDeleteWordProps } from "../../../@types";

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
        response.send("text");
    }
}

export default deleteWord;