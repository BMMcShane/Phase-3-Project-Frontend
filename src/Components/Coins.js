import React from "react";

function Coins({coinCount, farmLevel, toolLevel}){
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