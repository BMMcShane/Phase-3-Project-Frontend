import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from "./Login.js"
import Home from "./Home.js"

export default function App() {
    const [currentFarmer, setCurrentFarmer] = useState(null)
  
    const changeFarmer = (farmer) => {
      setCurrentFarmer(farmer)
    }
  return (
    <Switch>
   <Route exact path="/">
      <Home />
   </Route>

   <Route exact path="/login">
       <Login changeFarmer={changeFarmer}/>
   </Route>
   </Switch>
  )
  }
  // const [farmers, setFarmers] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:9292/farmers")
  //       .then((r) => r.json())
  //       .then((farmers) => setFarmers(farmers));
  //   }, []);
  
  //   return (
  //     <section>
  //       {farmers.map((farmer) => (
  //         <Login key={farmer.id} currentFarmer={farmer} />
  //       ))}
  //     </section>
  //   );
  // }