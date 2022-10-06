import React, { useState, useEffect } from "react";
import Login from "./Login";

function Header({forceUpdate}) {
  const [newUser, setNewUser] = useState(false)
  const [isLogin, setIsLogin]  = useState(false)
  const [userObject, setUserObject] = useState(JSON.parse(localStorage.getItem("userObject")))
  useEffect(() => { localStorage.setItem("userObject", JSON.stringify(userObject));
}, [userObject]);
  

let loginNode = null;
if (newUser) {
  loginNode=<Login forceUpdate={forceUpdate} isLogin={isLogin} setUserObject={setUserObject} setNewUser={setNewUser}/> 
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