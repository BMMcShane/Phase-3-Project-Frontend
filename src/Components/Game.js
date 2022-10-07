import React, {useEffect} from "react";
import GameDetails from "./GameDetails";

function Game({upgradePlantLevel, plantPlant, userObject, userData }) {


    return (
        <div className="game-content">
            <GameDetails upgradePlantLevel={upgradePlantLevel} userData={userData} userObject={userObject} plantPlant={plantPlant}/>
        </div>
    );
}

export default Game;