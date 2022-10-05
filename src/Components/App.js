import React from "react";
import Login from "./Login";
import Mascot from "./Mascot";
// import MiscBox from "./MiscBox";
import Plantopedia from "./Plantopedia";
import Tutorial from "./Tutorial";
import Shop from "./Shop";
import Coins from "./Coins";
import Credits from "./Credits";


function App() {
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
