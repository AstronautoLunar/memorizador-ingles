import { 
    DataProps, 
    WordsProps 
} from "../@types";

function checkDuplicateWords(data: DataProps) {
    for(let i = 0; i < data.words.length; i++) {
        for(let f = 1; f < data.words.length; f++) {
            console.log(data.words[i]);
            console.log(data.words[f]);
        }
    }
}

export default checkDuplicateWords;