import React, { useState, useEffect } from "react";
import Login from "./Login";

function Header({userObject, setUserObject}) {
  const [newUser, setNewUser] = useState(false)
  const [isLogin, setIsLogin]  = useState(false)

let loginNode = null;
if (newUser) {
  loginNode=<Login isLogin={isLogin} setUserObject={setUserObject}/> 
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