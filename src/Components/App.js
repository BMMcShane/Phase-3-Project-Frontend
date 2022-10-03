import React from "react";
import Login from "./Login";
import Mascot from "./Mascot";
import MiscBox from "./MiscBox";
import Shop from "./Shop";
import Coins from "./Coins";
import Credits from "./Credits";


function App() {
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
        <Login />
      </div>

      <div id="right-column">
        <Coins />
        <Shop />
      </div>
      </div>
      <br />
      <br />
      <Credits />
    </div>
  );
}

export default App;
