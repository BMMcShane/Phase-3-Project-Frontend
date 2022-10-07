import React, { useState } from "react";

function LogIn({forceUpdate, isLogin, setUserObject, setNewUser}) {
  const [formData, setFormData] = useState({
    username: '',
  });


  const [response, setResponse] = useState({});

    // const [savedCookie, setSavedCookie] = useState({});
    // const [cookies, setCookie, removeCookie] = useCookies([""]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // sign  up fetch function
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9292/${isLogin?"login":"signup"}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
      // console.log(data)
      setResponse(data);
      if (data["error"]) {
        window.alert (data["error"]);
      }
      else {
        setUserObject({id: data.farmer_id, coins: data.coins, username: formData.username, session_cookie: data["session_cookie"]})
        setNewUser(false)
        forceUpdate(Math.random())
      }
    })
  }


  
    
      // setCookie("x-access-token", data["x-access-token"]);
      // setSavedCookie({ cookie: data["x-access-token"] });


  return (
    <React.Fragment>
      
      <br />
      <div>
      <div id="login-text">
      {response.success ? (
          <h2>Welcome!</h2>
        ) : (
          <h2>You are not logged in yet.</h2>
        )}
        </div>

          <form id="login-form-input">
            <br />
            <input
              id="input-text"
              type="text"
              name="username"
              onChange={(e) => handleChange(e)}
              value={formData.username}
              placeholder="Your Username"
            />
            <input
              id="input-text"
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Your Password"
            />
          
          <div id="input-button">
            <button type="submit" id="submit" onClick={handleSubmit}>
              <h2>{isLogin? "LOG IN" : "SIGN UP"}</h2>
            </button>
          </div>
          </form>
          {!null ? 
            null : 
            <p>Not a valid input. Please try again.</p>
          }
      </div>
    </React.Fragment>
  );
}
export default LogIn;