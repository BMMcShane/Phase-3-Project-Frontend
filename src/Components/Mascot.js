import React from "react";
import kitty from "../Assets/kitty.png";

function Mascot() {
    
    function clicker(){
        // Clicker Function - Click to increase coins by 1
        console.log("meow");
    };

    return(
        
            <button id="mascot-btn" onClick={clicker}>
                <img id="mascot-img" src={kitty} alt="blah"/>
            </button>

    );
}



export default Mascot;