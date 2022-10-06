import React from "react";
import Game from "./Game";


function Login({plantPlant}){
    let loggedin = true;

    return loggedin ? (
        <div id="game-box">
            <Game plantPlant={plantPlant}/>
        </div>
    ) : (
        <div id="login-dumbass">
            <p> You Shouldn't see me!</p>
        </div>
    )
}

export default Login;