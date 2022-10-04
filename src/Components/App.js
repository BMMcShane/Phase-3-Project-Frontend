import React, { useState, useEffect } from "react";
import Game from "./Game"
import Mascot from "./Mascot";
import MiscBox from "./MiscBox";
import Plantopedia from "./Plantopedia";
import Coins from "./Coins";
import Credits from "./Credits";


function App() {


const [ users, setUsers ] = useState([]);
const [currentUser, setCurrentUser ] = useState('')
const [ plantList, setPlantList ] = useState([]);

const [hasLoggedIn, setHasLoggedIn] = useState(false)

// fetch plants 
useEffect(() => {
  fetch("http://localhost:9292/plants")
      .then(res => res.json())
      .then(plantList)
}, []);


  return (
    <div className="App">
      <br/>
      <br/>
      <div id="column-table">
      <div id="left-column">
        <Mascot />
        <MiscBox />
      </div>

      <div id="game-column">
        <Game
        onAddUser={(newUser)=>setUsers([...users, newUser])}
        onCurrentUser={(newUser)=>setCurrentUser(newUser)}
        currentUser={currentUser}
        onAddUserPlants={(freshPlant)=>setPlantList([...plantList, freshPlant])}
        plantList={plantList}
        onHasLoggedIn={() => setHasLoggedIn(true)}
        hasLoggedIn={hasLoggedIn}
        />
      
      
      </div>

      <div id="right-column">
        <Coins />
        <Plantopedia 
        currentUser={currentUser}
        plantList={plantList}
        />
      </div>
      </div>
      <br />
      <br />
      <Credits />
    </div>
  );
}

export default App;
