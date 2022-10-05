import React from "react";
import Game from "./Game";


function Login(){
    let loggedin = true;

    return loggedin ? (
        <div id="game-box">
            <Game />
        </div>
    ) : (
        <div id="login-dumbass">
            <p> You Shouldn't see me!</p>
        </div>
    )
}

export default Login;