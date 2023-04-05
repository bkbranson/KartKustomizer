import React from "react";
import { characterWheelGlider } from "../interfaces/characterWheelGlider";

export function Character(char: characterWheelGlider): JSX.Element {
    return (
        <div>
            {char.name} has source image <img src={char.picture}></img> and data
            {char.data}
        </div>
    );
}
