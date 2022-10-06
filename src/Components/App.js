import React, { useState, useEffect } from "react";
import Game from "./Game"
import Mascot from "./Mascot";
// import MiscBox from "./MiscBox";
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";



function App() {



const [ users, setUsers ] = useState([]);
const [currentUser, setCurrentUser ] = useState('')


const [hasLoggedIn, setHasLoggedIn] = useState(false)



  return (
    <div className="App" onLoad={plotUnlockChecker}>
      <div id="column-table">
      <div id="left-column">
        <Mascot clicker={clicker}/>
        <Tutorial />
      </div>

      <div id="game-column">
        <Game
        onAddUser={(newUser)=>setUsers([...users, newUser])}
        onCurrentUser={(newUser)=>setCurrentUser(newUser)}
        currentUser={currentUser}
        // onAddUserPlants={(freshPlant)=>setPlantList([...plantList, freshPlant])}
        // plantList={plantList}
        onHasLoggedIn={() => setHasLoggedIn(true)}
        hasLoggedIn={hasLoggedIn}
        />
      
      
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
