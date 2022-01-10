import { Request } from "express";
import { BodyModifyWordProps } from "../@types";

function validateBodyModifyWord(request: Request): boolean {
    const {
        id,
        US,
        BR
    }:BodyModifyWordProps = request.body;

    const isIdString = typeof id === "string";
    const isUSString = typeof US === "string";
    const isBRString = typeof BR === "string";
    const isPassed = 
        isIdString 
        && 
        isBRString 
        && 
        isUSString;

    return isPassed;
}

export default validateBodyModifyWord;