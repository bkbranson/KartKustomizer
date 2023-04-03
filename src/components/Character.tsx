import React from "react";
import { charwheelglid } from "../interfaces/charwheelglid";

export function Character(char: charwheelglid): JSX.Element {
    return (
        <div>
            {char.name} has source image <img src={char.picture}></img> and data
            {char.data}
        </div>
    );
}
