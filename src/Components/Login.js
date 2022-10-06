import React, { useState } from "react";

function LogIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [response, setResponse] = useState({});

  //   const [savedCookie, setSavedCookie] = useState({});
  //   const [cookies, setCookie, removeCookie] = useCookies([""]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // sign  up fetch function
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:9292/farmers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
      setResponse(data);
    
        // setCookie("x-access-token", data["x-access-token"]);
        // setSavedCookie({ cookie: data["x-access-token"] });
      })
      .catch((error) => window.alert(error));
  }

  return (
    <React.Fragment>
      
      <br />
      <div>
      {response.success == false ? 
       (<h2>Bummer! That username is taken. Try a different username!</h2>)
       : 
      (<h2>Sign Up Below To Create A Farm Of Your Own!</h2>)
       }

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
              <h2>SUBMIT</h2>
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