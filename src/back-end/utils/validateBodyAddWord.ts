import { Request } from "express";
import { RequestBodyAddWordProps } from "../@types";

function validateBodyAddWord(request: Request): boolean {
    const {
        US,
        BR,
    }: RequestBodyAddWordProps = request.body;

    const isUSString = typeof US === "string";
    const isBRString = typeof BR === "string" || Array.isArray(BR);
    const isPassed = 
        isUSString 
        && 
        isBRString;

    return isPassed;
}

export default validateBodyAddWord;