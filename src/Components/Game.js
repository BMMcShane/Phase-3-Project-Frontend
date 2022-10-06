import React from "react";
import GameDetails from "./GameDetails";

function Game({plantPlant}) {
    return (
        <div className="game-content">
            <GameDetails plantPlant={plantPlant}/>
        </div>
    );
}

export default Game;