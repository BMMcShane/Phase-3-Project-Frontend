import React, {useEffect, useState} from "react";
import Login from "./Login";
import Mascot from "./Mascot";
// import MiscBox from "./MiscBox";
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";


function App() {
  const [coinCount, setCoinCount] = useState()
  
  useEffect(() => {
    setCoinCount(100);
    console.log(coinCount)
  })

  function handlePurchase(coinCount, price) {
    if (coinCount > price) {
      setCoinCount(coinCount - price);
    } else {
      console.log("Not Enough Coins");
    };
  }

  return (
    <div className="App">
      <div id="column-table">
      <div id="left-column">
        <Mascot />
        <Tutorial />
      </div>

      <div id="game-column">
        <Login />
      </div>

      <div id="right-column">
        <br/>
        <Coins coinCount={coinCount}/>
        <br/>
        <Shop coinCount={coinCount} handlePurchase={handlePurchase}/>
        <br/>
        <Plantopedia />
        <br/>
      </div>
      </div>
    </div>
  );
}

export default App;
