import React, { useState, useEffect } from "react";
import Login from "./Login";

function Header({userData, forceUpdate}) {
  const [newUser, setNewUser] = useState(false)
  const [isLogin, setIsLogin]  = useState(false)
  const [userObject, setUserObject] = useState(JSON.parse(localStorage.getItem("userObject")))
  useEffect(() => { localStorage.setItem("userObject", JSON.stringify(userObject));
}, [userObject]);
  



const [coinCount, setCoinCount] = useState(JSON.parse(localStorage.getItem("coinCount")))
useEffect(() =>  { 
  fetch(`http://localhost:9292/farmers/${userObject.id}/coins`)
    .then((resp) => resp.json())
    .then(setCoinCount)
}, [coinCount]);

    

let loginNode = null;
if (newUser) {
  loginNode=<Login  setCoinCount={setCoinCount} forceUpdate={forceUpdate} isLogin={isLogin} setUserObject={setUserObject} userData={userData} setNewUser={setNewUser}/> 
}


return (
  <div id="login-container">
  
  <button onClick={() => {setNewUser(true); setIsLogin(true)}}>
    <h2>Log In</h2>
  </button>

  <button onClick={() => {setNewUser(true); setIsLogin(false)}}>
    <h2>Sign Up</h2>
  </button>
  {loginNode}
  </div>
)
}

export default Header