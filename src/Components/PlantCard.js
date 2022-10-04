import React, { useState } from "react"

export default function PlantCard( {details} ) {

    const [isClicked, setIsClicked] = useState(false);
   

    const name = details.name
    // const image = details.image
    const type = details.type
    const price = details.price 
    const rarity = details.rarity
    const description = details.description

    const detailCardFront = (
        <React.Fragment>
            <div id="card-box">
            <button className="switch">View plant details</button>
               <h2>{details.name}</h2>
               {/* <img 
                    src={image}
                    alt={name}
                /> */}
            </div>
         </React.Fragment>  
      )
      const detailCardBack = (
         <React.Fragment>
         <div>
               <button className="switch">View plant</button>
               <h2>{name}</h2>
               <h3>Visit the shoppe to add this plant to your farm!</h3>
               <p>type: {type}</p>
               <p>price: {price} coins</p>
               <p>rarity: {rarity}</p>
               <p>description: {description}</p>
               
               <br></br>
         </div>
         </React.Fragment>
      )
      
      return (
         <React.Fragment>
         <div>
         <div onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? detailCardBack : detailCardFront}
         </div>

        
        </div>
         </React.Fragment>
    );
   }
