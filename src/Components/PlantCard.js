import React from "react"

export default function PlantCard( {details, selectedPlant} ) {
   


    // const image = details.image
    const name = details.name
    const price = details.price 
    const description = details.description

      const detailCard = (
         <React.Fragment>
         <div>
               <h2>{name}</h2>
               <p>price: {price} coins</p>
               <p>description: {description}</p>

               <h3>Visit the shoppe to add this plant to your farm!</h3>
               
               <br></br>
         </div>
         </React.Fragment>
      )
      
      return (
         <React.Fragment>
         <div>
         <div>
            {detailCard}
         </div>

        
        </div>
         </React.Fragment>
    );
   }
