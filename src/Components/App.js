import React, { useState, useEffect } from "react";
import Game from "./Game"
import Mascot from "./Mascot";
// import MiscBox from "./MiscBox";
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";
import Credits from "./Credits";



function App() {



const [ users, setUsers ] = useState([]);
const [currentUser, setCurrentUser ] = useState('')


const [hasLoggedIn, setHasLoggedIn] = useState(false)



  return (
    <div className="App">
      <div id="column-table">
      <div id="left-column">
        <Mascot />
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
        <Coins />
        <Shop />
        <Plantopedia />
      </div>
      </div>
      <br />
      <br />
      <Credits />
    </div>
  );
}

export default App;
