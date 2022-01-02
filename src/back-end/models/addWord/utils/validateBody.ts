import { Request } from "express";
import { RequestBodyAddWord } from "../types";

function validateBody(request: Request): boolean {
    const {
        US,
        BR,
        date
    }: RequestBodyAddWord = request.body;

    const isUSString = typeof US === "string";
    const isBRString = typeof BR === "string";
    const isDateString = typeof date === "string";
    const isPassed = 
        isUSString 
        && 
        isBRString 
        && 
        isDateString;

    return isPassed;
}

export default validateBody;