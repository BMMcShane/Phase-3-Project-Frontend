import React, {useEffect, useState} from "react";
import Login from "./Login";
import Mascot from "./Mascot";
import Game from "./Game"
// import MiscBox from "./MiscBox";
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";


function App() {
  const [coinCount, setCoinCount] = useState(500)
  const [farmLevel, setFarmLevel] = useState(5)
  const [response, setResponse] = useState(null);
    

  function handlePurchase(price) {
    if (coinCount > price) {
      setCoinCount(coinCount - price);
    } else {
      console.log("Not Enough Coins");
    };
  }

  function upgradeFarmLevel(price) {
    if (farmLevel < 25 && price <= coinCount) {
      setFarmLevel(farmLevel + 1);
      handlePurchase(price);
      plotUnlockChecker();
    } else {
      console.log("Error")
    };
  }

  function plotUnlockChecker(farmLevel){
    let lockedPlots = document.getElementsByClassName('locked-plot');
    console.log(lockedPlots)
    let tempFarmLevel = farmLevel;

    if (lockedPlots.length === 25 && farmLevel === 5){
      for (var i = tempFarmLevel; i > 0; i--) unlockPlot();
    } else {
      unlockPlot();
    }
  }

  function unlockPlot() {
    document.getElementsByClassName('locked-plot')[0].className = "unlocked-plot";
    // goal.className = "unlocked-plot";
  }

  function handlePurchase(price) {
    if (coinCount >= price) {
      setCoinCount(coinCount - price);
    } else {
      console.log("Not Enough Coins");
    };
  }

  function clicker() {
    setCoinCount(coinCount + 1);
  }

  return (
    <div className="App" onLoad={plotUnlockChecker}>
      <div id="column-table">
      <div id="left-column">
        <Mascot clicker={clicker}/>
        <Tutorial />
      </div>
{/* create some sort of ternery to switch between login and game rendering? */}
     <div id="game-column">
     <Login />
     <Game response={response} setResponse={setResponse}/>
      </div>

      <div id="right-column">
        <br/>
        <Coins coinCount={coinCount} farmLevel={farmLevel}/>
        <br/>
        <Shop handlePurchase={handlePurchase} upgradeFarmLevel={upgradeFarmLevel} />
        <br/>
        <Plantopedia />
        <br/>
      </div>
      </div>
    </div>
  );
}

export default App;