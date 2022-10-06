import React, {useEffect, useState} from "react";
import Login from "./Login";
import Mascot from "./Mascot";
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";


function App() {
  const [coinCount, setCoinCount] = useState(500)
  const [farmLevel, setFarmLevel] = useState(5)
  const [toolLevel, setToolLevel] = useState(1)


  // Multipurpose Purchase function:

  function handlePurchase(price) {
    if (coinCount > price) {
      setCoinCount(coinCount - price);
    } else {
      console.log("Not Enough Coins");
    };
  }
  // Tool Upgrade Functions:

  function upgradeTools(price) {
    if (toolLevel < 10 && price <= coinCount) {
      setToolLevel(toolLevel +1);
      handlePurchase(price);
    } else {
      console.log("Error")
    };
  }


  // Farm Upgrade Functions:

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

  // window.onload = plotUnlockChecker(farmLevel);

  function unlockPlot() {
    let goal = document.getElementsByClassName('locked-plot')[0];
    if (goal.className === 'locked-plot'){
      goal.className = 'unlocked-plot';
    }

  }

 // Mascot clicker function

  function clicker() {
    setCoinCount(coinCount + 1);
  }

  // Plant a plant functions

  function plantPlant(plotNo) {
    let plot = document.getElementById(`${plotNo}`);
    let plant = document.getElementById(`hidden-dev-name`).textContent;
    let index = document.getElementById(`hidden-index`).textContent;
    let price = document.getElementById('hidden-price').textContent;

    if (price <= coinCount) {
      handlePurchase(price);
      plot.src = `../Assets/farmin/${plant}/01.gif`;
      savePlant(index);
    } else {
      console.log("Error");
    };
  }

  function savePlant(index) {
    console.log('ha');
  }


  // Return

  return (
    <div className="App">
      <div id="column-table">
      <div id="left-column">
        <Mascot clicker={clicker}/>
        <Tutorial />
      </div>

      <div id="game-column">
        <Login plantPlant={plantPlant}/>
      </div>

      <div id="right-column">
        <br/>
        <Coins coinCount={coinCount} farmLevel={farmLevel} toolLevel={toolLevel}/>
        <br/>
        <Shop handlePurchase={handlePurchase} upgradeFarmLevel={upgradeFarmLevel} upgradeTools={upgradeTools} />
        <br/>
        <Plantopedia />
        <br/>
      </div>
      </div>
    </div>
  );
}

export default App;
