import React from "react";

function Shop({upgradeFarmLevel, upgradeTools}) {

    // function shopclick(e){
    //     console.log(`${e.target.value}`)
    // }

    

    return (
        <div id="shop-box">
            <h2>Shoppe</h2>
            <p>Upgrade Farm</p>
            <button className="buy-btn" onClick={() => upgradeFarmLevel(10)} value="More Plot">
                10 coins
            </button>
            <br/>
            <br/>
            <p>Upgrade Tools</p>
            <button className="buy-btn" onClick={() => upgradeTools(15)} value="Hoes">
                15 coins
            </button>
        </div>
    );
}

export default Shop;