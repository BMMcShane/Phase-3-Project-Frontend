import React from "react";
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

    function plantClick(name, price, description, url, growTime) {
        let displayPic = document.getElementById("displayed-plant-pic");
        let displayName = document.getElementById("displayed-plant-name");
        let displayPrice = document.getElementById("displayed-plant-price");
        let displayDescription = document.getElementById("displayed-plant-description");
        let hiddenGrowTime = document.getElementById("hidden-grow-time");

        displayPic.src = url;
        displayName.textContent = `Name: ${name}`;
        displayPrice.textContent = `Costs ¢ ${price}`;
        displayDescription.textContent = description;
        hiddenGrowTime.textContent = growTime;
        // console.log(`${e.target.id}`)
    }

    return (
        <div id="plantopedia-content">
            <h2> Plantopedia </h2>
            <div id="plant-column-one">
                <img  id="displayed-plant-pic" src={grass} alt="Plant" />
            </div>
            <div id="plant-column-two">
                <p id="displayed-plant-name"> Name: "Grass"</p>
                <p id="displayed-plant-price"> Costs ¢ 0</p>
                <p id="displayed-plant-description"> Touch Grass</p>
                <p id="hidden-grow-time" hidden={true}></p>
            </div>
            <div id="plantopedia-button-grid">
                <div className="plantopedia-button-div">
                    <button id="grass" onClick={() => plantClick("Grass", "0", "Touch Grass", {grass}, 10)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="venus-fly-trap" onClick={() => plantClick("Venus Fly Trap", "15", "Hide your kids, hide your flies", {flytrap}, 30)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="pizza-tree" onClick={() => plantClick("Pizza Tree", "50", "Captain B. McCrea would be proud", {pizza}, 90)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="space-plant" onClick={() => plantClick("Space Plant!", "100", "Out of this World!", {space}, 180)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="eyeball-tree" onClick={() => plantClick("Eyeball Tree", "150", "Sees the sins of mankind", {eyeball}, 300)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="hedgefund" onClick={() => plantClick("Hedgefund", "300", "The reason you can't afford rent", {hedgefund}, 600)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="grass-two" onClick={() => plantClick("Grass 2.0", "0", "Is this Moss?", {grassTwo}, 15)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="fire" onClick={() => plantClick("Fire", "50", "Ready to celebrate your kids gender reveal!", {fire}, 45)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="bubble-bush" onClick={() => plantClick("Bubble Bush", "500", "Grows best in the bath. Requires twice as much fertilizer", {bubble}, 1200)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="f-ed-up-little-guy" onClick={() => plantClick("F***ed Up Little Guy", "750", "C'mahn, He's just a little guy!", {lil}, 3600)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="creeping-dread" onClick={() => plantClick("Creeping Dread", "1000", "We all know it", {dread}, 86400)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="succulent" onClick={() => plantClick("Succulent", "5000", "All things have a right to grow", {succ}, 1000000000000000)}>
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Plantopedia;