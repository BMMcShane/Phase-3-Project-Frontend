import React, { useState } from "react";

function Shop({onPlantUpgrade}) {

    const [plantIsValid, setPlantIsValid] = useState(true)

    function handleFreshPlant(e) {
        e.preventDefault()
        

     
        }
    

    return (
        <div id="shop-box">
            

            <h2>Shoppe</h2>
            <p>Unlock New Plant - 5 coins</p>
            <button onClick={handleFreshPlant}>Buy!  </button>
            <br/>
            <p>Upgrade Farm - 10 coins</p>
            <button onClick={handleFreshPlant}>Buy!</button>
            <br/>
            <p>Upgrade Tools - 10 coins</p>
            <button onClick={handleFreshPlant}>Buy!</button>
        </div>
    );
}


export default Shop;