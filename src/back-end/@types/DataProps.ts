export type WordsProps = {
    id: string;
    US: string;
    BR: string | string[];
    date: string;
}

export interface DataProps {
    words: WordsProps[]
}