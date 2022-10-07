import React, {useEffect, useState} from "react";
import Mascot from "./Mascot";
import Game from "./Game"
import Header from "./Header"
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";

import empty from "../Assets/farmin/Empty Plot.png";


function App({setNewUser, userData, plantClick, hiddenIndex}) {

  //Set State Functions
  const [selectedPlant, setSelectedPlant] = useState('');
  const [ignored, forceUpdate] =useState(Math.random())
  const [coinCount, setCoinCount] = useState('10000')
  const [farmLevel, setFarmLevel] = useState(0)
  const [toolLevel, setToolLevel] = useState(0)
  const [plantIndex, setPlantIndex] = useState(0)

  
  
  
  const [userObject, setUserObject] = useState(JSON.parse(localStorage.getItem("userObject")))
  useEffect(() => { localStorage.setItem("userObject", JSON.stringify(userObject));
}, [userObject]);

  // const id = userObject.id


//fetch for the farm data

// const [farmData, setFarmData] = useState({});


// useEffect(() =>  {  
//         fetch(`http://localhost:9292/farmers/${userObject.id}/farms`)
//           .then((response) => response.json())
//           .then(setFarmData) 
//           // .then(setFarmLevel(farmData.farm_upgrade_level))
//           // .then(statSetter(farmData))
//     }, []);
    
//     console.log(farmData)
//     console.log(farmData.farm_upgrade_level)

    // console.log(userData.coins)
  // console.log(farmData.farm_upgrade_level)
  // console.log(farmData.farmer_upgrade_level)


// Login Upgrade / Coin Setter

// function statSetter() {
//   // setCoinCount(coins);
//   setFarmLevel(farmData.farm_upgrade_level);
//   setToolLevel(farmData.farmer_upgrade_level);
//   plotUnlockChecker();
// }


  // Multipurpose Purchase function:

  function handlePurchase(price) {
    if (coinCount > price) {
      setCoinCount(coinCount - price);
      // postAccount();
    } else {
      console.log("Not Enough Coins");
    };
  }

  // Tool Upgrade Functions:

  function upgradeTools(price) {
    if (toolLevel < 10 && price <= coinCount) {
      setToolLevel(toolLevel +1);
      handlePurchase(price);
      //call function to patch the data on backend 
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
    let tempFarmLevel = farmLevel;

    if (lockedPlots.length === 25 && farmLevel >= 5){
      for (var i = tempFarmLevel; i > 0; i--) unlockPlot();
    } else {
      unlockPlot();
    }
  }

  function unlockPlot() {
    let goal = document.getElementsByClassName('locked-plot')[0];
    if (goal.className === 'locked-plot'){
      for (const child of goal.children) {
        child.src=empty
      }
      goal.className = 'unlocked-plot';
    }
  }

 // Mascot clicker function

  function clicker() {
    setCoinCount(coinCount + 1);
  };

  // Timer Function
  // function startTimer(plot, plant) {
  //   endTime = Date.now() + 20000;
  //   if (Date.now() >= endtime) {

  //   }


  // };
  // Harvest Function

  // Plant a plant functions

  const [plantedPlant, setPlantedPlant] =useState(false);


  function plantPlant(plotNo) {
    let plot = document.getElementById(`${plotNo}`);
    let plant = document.getElementById(`hidden-dev-name`).textContent;
    let index = document.getElementById(`hidden-index`).textContent;
    let price = document.getElementById('hidden-price').textContent;
    let parent = plot.closest('.unlocked-plot');

    //user id is pulled from the top fetch for farm data
    // let plot_location = plantPlant(plotNo)
    let plant_id = plantClick(index.textContent)
    console.log(plant_id)
    // console.log(selectedPlant)
    // console.log(plant_id)
    // console.log(plantIndex)
    // console.log(index)
    // console.log(plant_location)
    // console.log(plot)
    console.log(plotNo)

    if (price <= coinCount && parent != undefined) {
      handlePurchase(price);
      // startTimer(plot, plant);
      plot.src = `https://mewmewmill.s3.us-west-2.amazonaws.com/${plant}/01.gif`;

        fetch(`http://localhost:9292/farmers/${userObject.id}/add_plant/${plant_id}/${plotNo}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
          setPlantedPlant(data)
          plantPlant(plot)
          console.log(plantedPlant)
    
        })
      //add the id of the plant and log the time plant is planted
    } else {
      console.log("Error");
    };

    
  }


  console.log(selectedPlant)
  // Return

  return (
    <div className="App" >
      <div id="column-table">
      <div id="left-column">
        <br/>
        {/* <br/> */}
        <Mascot clicker={clicker}/>
        <br/>
        <br/>
        <br/>
        <Tutorial />
      </div>
{/* create some sort of ternery to switch between login and game rendering? */}
    <div id="game-column">
             {userObject===null?
             <Header forceUpdate={forceUpdate} userObject={userObject} setUserObject={setUserObject}/>
             :  
             <div>
              <div id="input-button">
             <button onClick={()=>{setUserObject(null)}}>
             <h3>Log Out</h3>
           </button>
           <Game 
           userData={userData} 
           userObject={userObject} 
           setNewUser={setNewUser} 
           plantPlant={plantPlant} 
           plotUnlockChecker={plotUnlockChecker}
           setCoinCount={setCoinCount}
           />
                </div>
            </div>}
            </div>
            
    

      <div id="right-column">
        <br/>
        <Coins coinCount={coinCount} farmLevel={farmLevel} toolLevel={toolLevel}/>
        <br/>
        <Shop upgradeFarmLevel={upgradeFarmLevel} upgradeTools={upgradeTools} />
        <br/>
        <Plantopedia 
        plantCliick={plantClick}
        setSelectedPlant={setPlantIndex}
        />
        <br/>
      </div>
      </div>
      </div>
    );
}

export default App;