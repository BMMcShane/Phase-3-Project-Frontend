import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export default function Login(changeFarmer){
    const history = useHistory(); 

    const [farmerLogin, setFarmerLogin] = useState("")

    async function findCurrentFarmer(username) {
      const response = await fetch(`http://localhost:9292/farmers/:${username}`)
      const farmer = await response.json()
      changeFarmer(farmer)
      history.push(`/farmers/${farmer.id}/plants`)
      }
  
      const handleSubmit = (e) => {
        e.preventDefault()
        findCurrentFarmer(farmerLogin)
        }
        const handleChange = e => {
        setFarmerLogin(e.target.value)
        }
        
    
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="login" value="Username">Username:   </label><br/>
        <input type="text" name="login" value={farmerLogin} onChange={handleChange} autoFocus={true}/>
        <input type="submit" value="Login"/>
    </form>
    )
}