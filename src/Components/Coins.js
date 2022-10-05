import React from "react";

function Coins({coinCount}){
    return (
        <div id="coin-box">
            <h2>Wallet</h2>
            <p>Coins: {coinCount}</p>
            <p>Farm Level: number</p>
            <p>Tool Level: number</p>
        </div>
    );
}

export default Coins;