import React, {useState, useEffect} from "react";

function Coins({ userData, coinCount, farmLevel, toolLevel, userObject, farmerData}){

    // console.log(userData.coins)

    
    return (
        <div id="coin-box">
            <h2>Wallet</h2>
            <p>Coins: {coinCount}</p>
            <p>Farm Level: {farmLevel}</p>
            <p>Tool Level: {toolLevel}</p>
        </div>
    );
}

export default Coins;