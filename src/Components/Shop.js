import React from "react";

function Shop({coinCount,handlePurchase}) {

    function shopclick(e){
        console.log(`${e.target.value}`)
    }

    return (
        <div id="shop-box">
            <h2>Shoppe</h2>
            <p>Unlock New Plant</p>
            <button className="buy-btn" onClick={shopclick} value="New Plant">
                5 coins
            </button>
            <br/>
            <p>Upgrade Farm</p>
            <button className="buy-btn" onClick={shopclick} value="More Plot">
                10 coins
            </button>
            <br/>
            <p>Upgrade Tools</p>
            <button className="buy-btn" onClick={shopclick} value="Hoes">
                10 coins
            </button>
        </div>
    );
}

export default Shop;