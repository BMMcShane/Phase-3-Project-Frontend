import React, { useEffect } from "react";
import Shop from "./Shop"
import PlantCard from "./PlantCard";



export default function Plantopedia({ hasLoggedIn, plantList }){

    // fetch plants 
    

    
    return (
        <div>
            <h4> I am Plantopedia </h4>
            <p> Hear me roar.</p>


            <React.Fragment>
        <div>
        <div className="plant-list">
        {hasLoggedIn ? 
         
         <Shop /> :

         
           plantList.map((eachPlant) =>
                <PlantCard
                    key={plantList.id}
                    details={eachPlant}
                />
            )
            

            
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
