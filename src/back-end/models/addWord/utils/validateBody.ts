import { Request } from "express";
import { RequestBodyAddWord } from "../types";

function validateBody(request: Request): boolean {
    const {
        US,
        BR,
    }: RequestBodyAddWord = request.body;

    const isUSString = typeof US === "string";
    const isBRString = typeof BR === "string";
    const isPassed = 
        isUSString 
        && 
        isBRString;

    return isPassed;
}

export default validateBody;