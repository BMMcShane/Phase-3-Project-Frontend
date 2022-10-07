import React, { useEffect, useState } from "react";
import empty from "../Assets/farmin/Empty Plot.png"

function GameDetails({plantPlant, userObject}) {

    
   
    
//   const [response, setResponse] = useState({});
    

const [userData, setUserData] = useState({});

    
console.log(userObject.id)
const id = userObject.id

useEffect(() =>  {  
        fetch(`http://localhost:9292/farmers/${id}`)
          .then((response) => response.json())
          .then(setUserData) 
    }, []);
    
    // console.log(userData.props)
    // console.log(userData)
    console.log(userData.coins)

  
    // function plotclick(e) {
    //     console.log(`click ${e.target.id}`);
    // }
    return(
        <div className="game-content">
            <h2>{userObject.username}'s Farm:</h2>
            <div className="plotbox">
                <div className="locked-plot">
                    <button onClick={() => plantPlant(1)}>
                        <img id="1" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(2)}>
                        <img id="2" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(3)}>
                        <img id="3" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(4)}>
                        <img id="4" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(5)}>
                        <img id="5" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(6)}>
                        <img id="6" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(7)}>
                        <img id="7" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(8)}>
                        <img id="8" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(9)}>
                        <img id="9" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(10)}>
                        <img id="10" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(11)}>
                        <img id="11" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(12)}>
                        <img id="12" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(13)}>
                        <img id="13" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(14)}>
                        <img id="14" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(15)}>
                        <img id="15" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(16)}>
                        <img id="16" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(17)}>
                        <img id="17" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(18)}>
                        <img id="18" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(19)}>
                        <img id="19" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(20)}>
                        <img id="20" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(21)}>
                        <img id="21" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(22)}>
                        <img id="22" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(23)}>
                        <img id="23" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(24)}>
                        <img id="24" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => plantPlant(25)}>
                        <img id="25" src={empty} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameDetails;