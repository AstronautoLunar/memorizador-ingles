import {
    CheckDuplicateWordsProps
} from "../@types";
import { data } from "../../data/index";

function checkDuplicateWords(newWord: CheckDuplicateWordsProps): boolean {
    
    for(let wordObject of data.words) {    
        const isUSIncludeData = 
            wordObject.US.toUpperCase() 
            === 
            newWord.US.toUpperCase();

        if(isUSIncludeData) {
            return false;
        }
    }

    return true;
}

export default checkDuplicateWords;