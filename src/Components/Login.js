import React, { useState } from "react";

function LogIn({isLogin, setUserObject}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      setResponse(data);
      if (data["error"]) {
        window.alert (data["error"]);
      }
      else {
        setUserObject({username: formData.username, session_cookie: data["session_cookie"]})
      }
    })
  }

  
      
  
    
      // setCookie("x-access-token", data["x-access-token"]);
      // setSavedCookie({ cookie: data["x-access-token"] });


  return (
    <React.Fragment>
      
      <br />
      <div>
      {response.success ? (
          <h3>Welcome!</h3>
        ) : (
          <h3>You are not logged in yet.</h3>
        )}

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