import React, { useState } from 'react'
import { Route } from "react-router-dom";

import Login from "./Login.js"
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const changeUser = (user) => {
    setCurrentUser(user)
  }
return (
 <Route exact path="/login">
     <Login changeUser={changeUser}/>
 </Route>
)
}