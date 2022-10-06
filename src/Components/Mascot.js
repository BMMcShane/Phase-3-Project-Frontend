import React from "react";
import MewMew from "../Assets/MewMew.gif";

function Mascot({clicker}) {
    
    // function clicker(){
    //     // Clicker Function - Click to increase coins by 1
    //     console.log("meow");
    // };

    return(
        
            <button id="mascot-btn" onClick={() => clicker()}>
                <img id="mascot-img" src={MewMew} alt="blah"/>
                <h2>MewMew's Mill</h2>
            </button>

    );
}



export default Mascot;