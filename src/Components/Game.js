import React, {useEffect} from "react";
import GameDetails from "./GameDetails";

function Game({plantPlant, userObject, userData}) {


    return (
        <div className="game-content">
            <GameDetails userData={userData} userObject={userObject} plantPlant={plantPlant}/>
        </div>
    );
}

export default Game;