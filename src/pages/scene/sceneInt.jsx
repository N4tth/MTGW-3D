import React from "react";
import "./stylesScene.css"

import useMonigoteStore from "../components/monigote/monigoteStore";

function SceneInterface(){
    const{monigote, setHunger, setHealth, setJoy} = useMonigoteStore();

    const handleFeed = () => {
        setHunger(monigote.hunger -10);
    };
    const handlePlay= () => {
        setJoy(monigote.joy + 10);
    };
    const handleBath = () => {
        setHealth(monigote.health + 10);
    };

    return (
        /* si = ABR: Scene Interface*/
        <div className="SceneInterface"> 
            <header className="SI-header">
                Tu habitación
            </header>
            <div className="SI-body">
                <button className="icon-button">
                    <img src="../public/assets/icons/homeIcon.png" alt="HOME"/>
                </button>
                <button className="icon-button">
                    <img src="../public/assets/icons/listIcon.png" alt="List"/>
                </button>
                <button className="icon-button">
                    <img src="../public/assets/icons/statIcon.png" alt="statistics"/>
                </button>
            </div>
            <footer className="SI-footer">
                <button className="footer-button" onClick={handleFeed}>Alimentar</button>
                <button className="footer-button" onClick={handlePlay}>Jugar</button>
                <button className="footer-button" onClick={handleBath}>Lavar</button>
            </footer>
        </div>
    );
}

export default SceneInterface;