import React, { useEffect } from "react";
import GameDetails from "./GameDetails";
// import Plantopedia from "./Plantopedia";
import Login from "./Login"
import {v4 as uuid} from "uuid";

export default function Game({ onAddUser, onCurrentUser, currentUser, onAddUserPlants, hasLoggedIn, onHasLoggedIn }) {

    // const thisUser = currentUser.id
    const thisUserUsername = currentUser.username

    let plantList 

    useEffect(() => {
        fetch(`http://localhost:9292/plants`)
            .then(res => res.json())
            .then(plantList)
      }, []);

    //const [cityFormatted, setCityFormatted] = useState("")

    // function handleNewPlant(plantopediaPlant) {
    //     onAddUserPlants(plantopediaPlant)
    //         fetch(`http://localhost:9292/farmers/${thisUser}`, {
    //             method: 'PATCH',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({
    //                 plants: [...plantList, plantopediaPlant]
    //             })
    //         })
    // }

return (
    <React.Fragment>
    <div>
        {hasLoggedIn ?
        <div>
            <h1>Welcome, {thisUserUsername}!</h1>
            <p>Browse and purchase new plants to add to your collection</p>
{/* 
                //onCityFormatSet={(formattedCity) => setCityFormatted(formattedCity)}
                // onPlantUpgrade={(plantopediaPlant) => handleNewPlant(plantopediaPlant)}
   */}
            {/* <h1>Your Plants:</h1> */}
            {/* {plantList.map((eachPlant) => 
                <div key={id()}>
                    <p>{eachPlant}</p>
                </div>
            )} */}
        </div>
        : 
        <div> 
            <Login 
                onAddUser={onAddUser}
                onCurrentUser={onCurrentUser} 
                onHasLoggedIn={onHasLoggedIn}
            />
        </div>
    }
    </div>
    </React.Fragment>
    );
}