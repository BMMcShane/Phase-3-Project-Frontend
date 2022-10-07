import React, {useEffect, useState} from "react";
import Mascot from "./Mascot";
import Game from "./Game"
import Header from "./Header"
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";


function App({setNewUser, userData}) {

  const [ignored, forceUpdate] =useState(Math.random())

  const [userObject, setUserObject] = useState(JSON.parse(localStorage.getItem("userObject")))
  useEffect(() => { localStorage.setItem("userObject", JSON.stringify(userObject));
}, [userObject]);

  const id = userObject.id


//fetch for the farm data

// const [farmData, setFarmData] = useState({});


// useEffect(() =>  {  
//         fetch(`http://localhost:9292/farmers/${id}/farms`)
//           .then((response) => response.json())
//           .then(setFarmData) 
//     }, []);
    
//     console.log(farmData)

    // console.log(userData.coins)
//   console.log(farmData.farm_upgrade_level)
//   console.log(farmData.farmer_upgrade_level)


  const [coinCount, setCoinCount] = useState('100')
  const [farmLevel, setFarmLevel] = useState('1')
  const [toolLevel, setToolLevel] = useState('1')


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

  const [plantedPlant, setPlantedPlant] =useState(false);

  function plantPlant(plotNo) {
    let plot = document.getElementById(`${plotNo}`);
    let plant = document.getElementById(`hidden-dev-name`).textContent;
    let index = document.getElementById(`hidden-index`).textContent;
    let price = document.getElementById('hidden-price').textContent;

    //user id is pulled from the top fetch for farm data
    // let plot_location = plotNo
    let plant_id = index

    if (price <= coinCount) {
      handlePurchase(price);
      // plot.src = `../Assets/farmin/${plant}/01.gif`;
      // savePlant(index);

        fetch(`http://localhost:9292/farmers/${id}/add_plant/${plant_id}`, {
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

  // function savePlant(index) {
  //   console.log('ha');
  // }
  


  // Return

  return (
    <div className="App">
      <div id="column-table">
      <div id="left-column">
        <Mascot clicker={clicker}/>
        <Tutorial />
      </div>
{/* create some sort of ternery to switch between login and game rendering? */}
    <div id="game-column">
             {userObject===null?
             <Header forceUpdate={forceUpdate} userObject={userObject} setUserObject={setUserObject}/>
             :  
             <div>
              <div>
             <button onClick={()=>{setUserObject(null)}}>
             <h3>Log Out</h3>
           </button>
           <Game userData={userData} userObject={userObject} setNewUser={setNewUser} plantPlant={plantPlant} 
           />
                </div>
            </div>}
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