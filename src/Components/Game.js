import React, {useEffect} from "react";
import GameDetails from "./GameDetails";

function Game({plantPlant, userObject, userData, plotUnlockChecker, setCoinCount}) {


    return (
        <div className="game-content">
            <GameDetails 
            userData={userData} 
            userObject={userObject} 
            plantPlant={plantPlant} 
            plotUnlockChecker={plotUnlockChecker}
            setCoinCount={setCoinCount}
            />
        </div>
    );
}

export default Game;