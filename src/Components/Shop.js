import React from "react";

function Shop({ handlePurchase, upgradeFarmLevel, upgradeTools}) {

    // function shopclick(e){
    //     console.log(`${e.target.value}`)
    // }

    

    return (
        <div id="shop-box">
            <h2>Shoppe</h2>
            <p>Unlock New Plant</p>
            <button className="buy-btn" onClick={() => handlePurchase(5)} value="New Plant">
                5 coins
            </button>
            <br/>
            <p>Upgrade Farm</p>
            <button className="buy-btn" onClick={() => upgradeFarmLevel(10)} value="More Plot">
                10 coins
            </button>
            <br/>
            <p>Upgrade Tools</p>
            <button className="buy-btn" onClick={() => upgradeTools(15)} value="Hoes">
                15 coins
            </button>
        </div>
    );
}

export default Shop;