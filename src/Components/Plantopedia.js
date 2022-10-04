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


    return (
        <div>
            <h4> I am Plantopedia </h4>
            <p> Hear me roar.</p>

            <PlantList onHandleCurrentPlant={(selectedPlant) => setCurrentPlant(selectedPlant)} />

        
            <PlantCard details={plantList} selectedPlant={selectedPlant}/>
               
       
        </div>
     
            // {/* Map of unlocked plants with image, name, and detail. 
            // Contain all in one of those slideshow things. */}
        
    )

}
