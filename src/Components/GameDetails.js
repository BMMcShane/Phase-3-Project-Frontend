import React, { useEffect, useState } from "react";
import locked from "../Assets/farmin/Empty Plot.png"
// import locked from "../Assets/farmin/Locked Plot.png"

function GameDetails({plantPlant, userObject, plotUnlockChecker, setCoinCount}) {

    
   
    
//   const [response, setResponse] = useState({});
    

const [userData, setUserData] = useState({});

    
// console.log(userObject.id)
const id = userObject.id

useEffect(() =>  {  
        fetch(`http://localhost:9292/farmers/${id}`)
          .then((response) => response.json())
          .then(setUserData)
        //   .then(coinCoin(userData))
        //   .then(plotUnlockChecker())
        //   .then(console.log(userData)) 
    }, []);
    
    // console.log(userData.props)
    console.log(userData)
    console.log(userData.coins)

    function coinCoin(userData) {
        // coin = userData.coins
        setCoinCount(userData.coins)
    }

    return(
        <div className="game-content">
            <h2>{userObject.username}'s Farm:</h2>
            <div className="plotbox">
                <div className="locked-plot">
                    <button onClick={() => plantPlant(1)}>
                        <img id="1" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(2)}>
                        <img id="2" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(3)}>
                        <img id="3" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(4)}>
                        <img id="4" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(5)}>
                        <img id="5" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(6)}>
                        <img id="6" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(7)}>
                        <img id="7" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(8)}>
                        <img id="8" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(9)}>
                        <img id="9" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(10)}>
                        <img id="10" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(11)}>
                        <img id="11" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(12)}>
                        <img id="12" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(13)}>
                        <img id="13" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(14)}>
                        <img id="14" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(15)}>
                        <img id="15" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(16)}>
                        <img id="16" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(17)}>
                        <img id="17" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(18)}>
                        <img id="18" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(19)}>
                        <img id="19" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(20)}>
                        <img id="20" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(21)}>
                        <img id="21" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(22)}>
                        <img id="22" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(23)}>
                        <img id="23" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(24)}>
                        <img id="24" src={locked} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(25)}>
                        <img id="25" src={locked} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameDetails;