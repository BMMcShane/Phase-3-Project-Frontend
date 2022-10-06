<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import PlantList from "./PlantList";



export default function Plantopedia(){

    // fetch plants 
    
    const [currentPlant, setCurrentPlant] = useState({});
    const [ plantList, setPlantList] = useState({});

    const selectedPlant = 1
    

    useEffect(() => {
      fetch(`http://localhost:9292/plants/${selectedPlant}`)
          .then(res => res.json())
          .then(setPlantList)
          console.log(plantList)
    }, [currentPlant]);
=======
import React from "react";
import kitty from "../Assets/kitty.png";

>>>>>>> origin


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
<<<<<<< HEAD
            <p> Hear me roar.</p>

            <PlantList onHandleCurrentPlant={(selectedPlant) => setCurrentPlant(selectedPlant)} />

        
            <PlantCard details={plantList} selectedPlant={selectedPlant}/>
               
       
=======
            <div id="plant-column-one">
                <img  id="displayed-plant-pic" src={kitty} alt="Plant" />
            </div>
            <div id="plant-column-two">
                <p id="displayed-plant-name"> Plant Name</p>
                <p id="displayed-plant-price"> Plant Price</p>
                <p id="displayed-plant-description"> Plant Description</p>
                <p id="hidden-grow-time" hidden={true}></p>
            </div>
            <div id="plantopedia-button-grid">
                <div className="plantopedia-button-div">
                    <button id="grass" onClick={() => plantClick("Grass", "0", "Touch Grass", "", 10)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="venus-fly-trap" onClick={() => plantClick("Venus Fly Trap", "15", "Hide your kids, hide your flies", "", 30)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="pizza-tree" onClick={() => plantClick("Pizza Tree", "50", "Captain B. McCrea would be proud", "", 90)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="space-plant" onClick={() => plantClick("Space Plant!", "100", "Out of this World!", "", 180)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="eyeball-tree" onClick={() => plantClick("Eyeball Tree", "150", "Sees the sins of mankind", "", 300)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="hedgefund" onClick={() => plantClick("Hedgefund", "300", "The reason you can't afford rent", "", 600)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="grass-two" onClick={() => plantClick("Grass 2.0", "0", "Kickin' grass, taking names", "", 15)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="fire" onClick={() => plantClick("Fire", "50", "Don't plant in dry season", "", 45)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="bubble-bush" onClick={() => plantClick("Bubble Bush", "500", "Grows best in the bath. Requires twice as much fertilizer", "", 1200)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="f-ed-up-little-guy" onClick={() => plantClick("F***ed Up Little Guy", "750", "C'mahn, He's just a little guy!", "", 3600)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="creeping-dread" onClick={() => plantClick("Creeping Dread", "1000", "We all know it", "", 86400)}>
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="plantopedia-button-div">
                    <button id="succulent" onClick={() => plantClick("Succulent", "5000", "All things have a right to grow", "", 1000000000000000)}>
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
>>>>>>> origin
        </div>
     
            // {/* Map of unlocked plants with image, name, and detail. 
            // Contain all in one of those slideshow things. */}
        
    )

}
