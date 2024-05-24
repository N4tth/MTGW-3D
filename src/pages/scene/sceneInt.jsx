import React from "react";
import styles from "./stylesScene.module.css"; // Importando como módulo CSS

import useMonigoteStore from "../../components/monigote/monigoteStore";

function SceneInt() {
    const { monigote, setHunger, setHealth, setJoy } = useMonigoteStore();

    const handleFeed = () => {
        setHunger(monigote.hunger - 10);
    };

    const handlePlay = () => {
        setJoy(monigote.joy + 10);
    };

    const handleBath = () => {
        setHealth(monigote.health + 10);
    };

    return (
        <div className={styles.SceneInterface}>
            <header className={styles.SIHeader}>
                Tu habitación
            </header>
            <div className={styles.SIBody}>
                {/* Establece el tamaño y la posición de "room" */}
                <div className={styles.Room} style={{ width: '100vw', height: '100vh' }}>
                    {/* Renderiza el objeto "room" aquí */}
                </div>
                {/* Establece el tamaño y la posición de "monigote" */}
                <div className={styles.Monigote} style={{ width: '50px', height: '50px', position: 'absolute', bottom: '20px' }}>
                    {/* Renderiza el objeto "monigote" aquí */}
                </div>
            </div>
            <footer className={styles.SIFooter}>
                <button className={styles.FooterButton} onClick={handleFeed}>Alimentar</button>
                <button className={styles.FooterButton} onClick={handlePlay}>Jugar</button>
                <button className={styles.FooterButton} onClick={handleBath}>Lavar</button>
            </footer>
        </div>
    );
}

export default SceneInt;
