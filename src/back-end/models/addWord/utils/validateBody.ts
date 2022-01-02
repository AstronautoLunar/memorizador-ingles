import { Request } from "express";

function validateBody(request: Request): boolean {
    let isPassedValidate = true;

    const values = Object.values(request.body);

    const typeValuesArray = values.map(value => typeof value === "string");

    for(let typeValue of typeValuesArray) {
        if(!typeValue) {
            isPassedValidate = false;
        }
    }

    return isPassedValidate;
}

export default validateBody;