import React, { useState } from "react";
import bubble from "../Assets/farmin/bubble/04.gif";
import dread from "../Assets/farmin/dread/04.gif";
import eyeball from "../Assets/farmin/eyeball/04.gif";
import fire from "../Assets/farmin/fire/04.gif";
import flytrap from "../Assets/farmin/flytrap/04.gif";
import grass from "../Assets/farmin/grass/04.gif";
import grassTwo from "../Assets/farmin/grass two/04.gif";
import hedgefund from "../Assets/farmin/hedgefund/04.gif";
import lil from "../Assets/farmin/lil/04.gif";
import pizza from "../Assets/farmin/pizza/03.gif";
import space from "../Assets/farmin/space/04.gif";
import succ from "../Assets/farmin/succulent/04.gif";

function Plantopedia(){
    
    const [displaySrc, setDisplaySrc] = useState(grass)


    function plantClick(name, price, description, url, index, devName, devPrice) {
        // let displayPic = document.getElementById("displayed-plant-pic");
        let displayName = document.getElementById("displayed-plant-name");
        let displayPrice = document.getElementById("displayed-plant-price");
        let displayDescription = document.getElementById("displayed-plant-description");
        let hiddenIndex = document.getElementById("hidden-index");
        let hiddenDevName = document.getElementById('hidden-dev-name');
        let hiddenPrice = document.getElementById("hidden-price")

        setDisplaySrc(url);
        displayName.textContent = `Name: ${name}`;
        displayPrice.textContent = `Costs ¢ ${price}`;
        displayDescription.textContent = description;
        hiddenIndex.textContent = index;
        hiddenDevName.textContent = devName;
        hiddenPrice.textContent = devPrice;
        // console.log(`${e.target.id}`)
    }

    return (
        <div id="plantopedia-content">
            <h2> Plantopedia </h2>
            <div id="plant-column-one">
                <img  id="displayed-plant-pic" src={displaySrc} alt="Plant" />
            </div>
            <div id="plant-column-two">
                <p id="displayed-plant-name"> Name: "Grass"</p>
                <p id="displayed-plant-price"> Costs ¢ 0</p>
                <p id="displayed-plant-description"> Touch Grass</p>
                <p id="hidden-index" hidden={true}>1</p>
                <p id="hidden-dev-name" hidden={true}>grass</p>
                <p id="hidden-price" hidden={true}>0</p>
            </div>
            <div id="plantopedia-button-grid">
                <div className="plantopedia-button-div">
                    <button id="grass" onClick={() => plantClick("Grass", "0", "Touch Grass", grass, 1, "grass", 0)}>
                        <img src={grass} alt="Grass" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="venus-fly-trap" onClick={() => plantClick("Venus Fly Trap", "15", "Hide your kids, hide your flies", flytrap, 2, "flytrap", 15)}>
                        <img src={flytrap} alt="Flytrap" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="pizza-tree" onClick={() => plantClick("Pizza Tree", "50", "Captain B. McCrea would be proud", pizza, 3, "pizza", 50)}>
                        <img src={pizza} alt="Pizza" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="space-plant" onClick={() => plantClick("Space Plant!", "100", "Out of this World!", space, 4, "space", 100)}>
                        <img src={space} alt="Spaceplant" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="eyeball-tree" onClick={() => plantClick("Eyeball Tree", "150", "Sees the sins of mankind", eyeball, 5, "eyeball", 150)}>
                        <img src={eyeball} alt="Eyeball" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="hedgefund" onClick={() => plantClick("Hedgefund", "300", "The reason you can't afford rent", hedgefund, 6, "hedgefund", 300)}>
                        <img src={hedgefund} alt="Hedgefund" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="grass-two" onClick={() => plantClick("Grass 2.0", "0", "Is this Moss?", grassTwo, 7, "grass two", 0)}>
                        <img src={grassTwo} alt="Grass 2!" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="fire" onClick={() => plantClick("Fire", "50", "Ready to celebrate your kids gender reveal!", fire, 8, "fire", 50)}>
                        <img src={fire} alt="Fire" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="bubble-bush" onClick={() => plantClick("Bubble Bush", "500", "Grows best in the bath. Requires twice as much fertilizer", bubble, 9, "bubble", 500)}>
                        <img src={bubble} alt="Bubblebush" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="f-ed-up-little-guy" onClick={() => plantClick("F***ed Up Little Guy", "750", "C'mahn, He's just a little guy!", lil, 10, "lil", 750)}>
                        <img src={lil} alt="F***ed up Little Guy" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="creeping-dread" onClick={() => plantClick("Creeping Dread", "1000", "We all know it", dread, 11, "dread", 1000)}>
                        <img src={dread} alt="Creeping Dread" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="succulent" onClick={() => plantClick("Succulent", "5000", "All things have a right to grow", succ, 12, "succulent", 5000)}>
                        <img src={succ} alt="Succulent" />
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Plantopedia;