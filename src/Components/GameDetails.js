import { fireEvent } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import empty from "../Assets/farmin/Empty Plot.png"

import bubble from "../Assets/farmin/bubble/04.gif";
import dread from "../Assets/farmin/dread/04.gif";
import eyeball from "../Assets/farmin/eyeball/04.gif";
import fire from "../Assets/farmin/fire/04.gif";
import flytrap from "../Assets/farmin/flytrap/04.gif";
import grass from "../Assets/farmin/grass/04.gif";
import grassTwo from "../Assets/farmin/grass two/04.gif";
import hedgefund from "../Assets/farmin/hedgefund/04.gif";
import lil from "../Assets/farmin/lil/04.gif";
import pizza from "../Assets/farmin/pizza/04.gif";
import space from "../Assets/farmin/space/04.gif";
import succ from "../Assets/farmin/succulent/04.gif";
function GameDetails({ userObject, upgradePlantLevel}) {

// const grass = "https://mewmewmill.s3.us-west-2.amazonaws.com/grass/01.gif"
// const flytrap = "https://mewmewmill.s3.us-west-2.amazonaws.com/flytrap/01.gif"
// const pizza = "https://mewmewmill.s3.us-west-2.amazonaws.com/pizza/01.gif"
// const space = "https://mewmewmill.s3.us-west-2.amazonaws.com/space/01.gif"
// const eyeball = "https://mewmewmill.s3.us-west-2.amazonaws.com/eyeball/01.gif"
// const hedgefund = "https://mewmewmill.s3.us-west-2.amazonaws.com/hedgefund/01.gif"
// const grassTwo = "https://mewmewmill.s3.us-west-2.amazonaws.com/grassTwo/01.gif"
// const fire = "https://mewmewmill.s3.us-west-2.amazonaws.com/fire/01.gif"
// const bubble = "https://mewmewmill.s3.us-west-2.amazonaws.com/bubble/01.gif"
// const lil = "https://mewmewmill.s3.us-west-2.amazonaws.com/lil/01.gif"
// const dread = "https://mewmewmill.s3.us-west-2.amazonaws.com/dread/01.gif"
// const succ = "https://mewmewmill.s3.us-west-2.amazonaws.com/succ/01.gif" 
    
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
                    <button onClick={() => upgradePlantLevel(1, grass, 0)}>
                        <img id="1" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(2, flytrap, 15)}>
                        <img id="2" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(3, pizza, 50)}>
                        <img id="3" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(4, space, 100)}>
                        <img id="4" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(5, eyeball, 150)}>
                        <img id="5" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(6, hedgefund, 300)}>
                        <img id="6" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(7, flytrap, 15)}>
                        <img id="7" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(8, succ, 5000)}>
                        <img id="8" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(9, bubble, 500)}>
                        <img id="9" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(10, lil, 750)}>
                        <img id="10" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(11, bubble, 500)}>
                        <img id="11" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(12, dread, 1000)}>
                        <img id="12" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(13, lil, 750)}>
                        <img id="13" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(14, fire, 50)}>
                        <img id="14" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(15, pizza, 50)}>
                        <img id="15" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(16, space, 100)}>
                        <img id="16" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(17, flytrap, 15)}>
                        <img id="17" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(18, eyeball, 150)}>
                        <img id="18" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(19, hedgefund, 300)}>
                        <img id="19" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(20, eyeball, 150)}>
                        <img id="20" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(21, pizza, 50)}>
                        <img id="21" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(22, space, 100)}>
                        <img id="22" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(23, flytrap, 15)}>
                        <img id="23" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(24, bubble, 500)}>
                        <img id="24" src={empty} alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button onClick={() => upgradePlantLevel(25, grassTwo, 0)}>
                        <img id="25" src={empty} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameDetails;