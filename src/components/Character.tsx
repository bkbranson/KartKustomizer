import React from "react";
import { character } from "../interfaces/character";

export function Character(char: character): JSX.Element {
    return (
        <div>
            {char.name} has source image {char.picture} and data {char.data}
        </div>
    );
}
