import React, { useState } from "react";
import Game from "./Game";

function LogIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [response, setResponse] = useState({});
  const [userInfo, setUserInfo] = useState({});
  //   const [savedCookie, setSavedCookie] = useState({});
  //   const [cookies, setCookie, removeCookie] = useCookies([""]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:9292/login', {
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
  console.log(response);
  function handleInfoClick(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/users/${response.user_id}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => window.alert(error));
  }

  return (
    <div>
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
         <button type="submit" id="submit" onClick={handleSubmit} >
         <h2>SUBMIT</h2>
      </button>
      </div>
      </form>
      <br />
      <div>
        {response.success ? (
          <h3>You successfully logged in!</h3>
          
        ) : (
          <h3>You are not logged in yet.</h3>
        )}
      </div>
    </div>
    
  );
}

export default LogIn;