import React from "react";
import kitty from "../Assets/kitty.png";


function Plantopedia(){

    function plantclick(e) {
        console.log(`${e.target.id}`)
    }

    return (
        <div id="plantopedia-content">
            <h2> Plantopedia </h2>
            <div id="plant-column-one">
                <img  id="display-plant" src={kitty} alt="Plant" />
            </div>
            <div id="plant-column-two">
                <p> Plant Name</p>
                <p> Plant Price</p>
                <p> Plant Description</p>
            </div>
            <div id="plantopedia-button-grid">
                <div className="plantopedia-button-div">
                    <button id="grass" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="venus-fly-trap" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="pizza-tree" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="space-plant" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="eyeball-tree" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="hedgefund" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="grass-two" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="fire" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="bubble-bush" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="f-ed-up-little-guy" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="creeping-dread" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="succulent" onClick={plantclick}>
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Plantopedia;