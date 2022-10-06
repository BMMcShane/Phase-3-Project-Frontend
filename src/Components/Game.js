import React, {useEffect} from "react";
import GameDetails from "./GameDetails";

function Game({plantPlant, userObject}) {


    return (
        <div className="game-content">
            <GameDetails userObject={userObject} plantPlant={plantPlant}/>
        </div>
    );
}

export default Game;