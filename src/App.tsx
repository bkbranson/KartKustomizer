import React from "react";
import "./App.css";
import { Character } from "./components/Character";
import { CHARACTERS } from "./data/characters.json";
import { charwheelglid } from "./interfaces/charwheelglid";
import { dataFormat } from "./interfaces/dataFormat";

function App(): JSX.Element {
    const characterData: charwheelglid[] = CHARACTERS as charwheelglid[]; //all of the character data
    return (
        <div className="App">
            <header className="App-header">Testing Grounds</header>
            <Character
                name="Roy"
                picture="./pictures/charactericons/MK8D_Roy.png"
                data={characterData[0].data}
            ></Character>
        </div>
    );
}
//MUST EDIT JSON FILES AND RESTRUCTURE< PAUSING UNTIL THIS HAPPENS
export default App;
