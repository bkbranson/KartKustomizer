import { dataFormat } from "./dataFormat";
export interface character {
    //the following strings are to access the correct file / determine the correct info for a character
    name: string;
    picture: string;
    data: dataFormat;
}
