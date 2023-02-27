import React from "react";
import "./App.css";
import { Character } from "./components/Character";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Testing Grounds</header>
            <p>
                <Character
                    name="Roy"
                    picture="../src/images/Roy_Image.jpg"
                    data={wg: 1, ac: 1, on: 1, of: 1, mt: 1, sl: 1, sw: 1, sa: 1, sg: 1, tl: 1, tw: 1, ta: 1, tg: 1}
                ></Character>
            </p>
        </div>
    );
}

export default App;
