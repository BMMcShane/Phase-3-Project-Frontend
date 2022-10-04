import React, { useState, useEffect } from "react";
import Shop from "./Shop"
import PlantCard from "./PlantCard";
import {v4 as uuid} from "uuid";

export default function Plantopedia({ plantList }){

    const [ allPlantData, setAllPlantData ] = useState([])

    if (plantList) {
        plantList.map((eachPlant) => {
        
                fetch(`http://localhost:9292/plants/${eachPlant}`)
                .then(res => res.json())
                .then(data => setAllPlantData(allPlantData=>[...allPlantData, data]))
            },[])
    }


    return (
        <div>
            <h4> I am Plantopedia </h4>
            <p> Hear me roar.</p>
            <Shop />

            <React.Fragment>
        <div>
        <div className="plant-list">
        {plantList.length >= 1 ? 
            allPlantData.map((eachPlant) =>
                <PlantCard
                    key={uuid()}
                    details={eachPlant}
                />
            ) : 
            <h3 className="login-message"><em>You'll need to sign up in order to create a farm of your own!</em></h3>
        }
        </div>
        <br />

        </div>
        </React.Fragment>
            {/* Map of unlocked plants with image, name, and detail. 
            Contain all in one of those slideshow things. */}
        </div>
    )

}
