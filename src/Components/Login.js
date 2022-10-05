import React, { setState, useState, useEffect } from "react";


export default function Login({onCurrentUser, onAddUser, onHasLoggedIn, hasLoggedIn}){

    // const timestamp = Date.now();
    // const loggedInTime = console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));

    // const [usernames, setUsernames] = useState([])
    const [ userData, setUserData ] = useState({
        username: '',
        password: '',
      });

      const [ loginError, setLoginError] = useState(null)


    
      // updating the user's input as they type...
      function handleChange(e) {
        setUserData({
            ...userData, [e.target.name]: e.target.value,
          });
      }
    
      
      // once submit their name, posts their username and password
      function handleSubmit(e) {
        e.preventDefault();
  


        const newUser = {
          username: userData.username,
          password: userData.password,
        }

        e.target.reset();
        onCurrentUser(newUser) 


    fetch("http://localhost:9292/farmers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUser) => {
        onAddUser(newUser)
        setLoginError(false)
        onHasLoggedIn()
        getUsernames()
        

      })
      
      .catch(() => {
        setLoginError(true)
        console.log(`${newUser.username} is not available as a username`)
      });

      }
   


function getUsernames() {
  const usernames = [];
        fetch("http://localhost:9292/farmers")
        .then(r => r.json())
        .then((json) => usernames.push(json));
        console.log([usernames])

     
        // const newArray = usernames.map((username) 
        //   {username === userData.username} ? loginError(true) : loginError(false)

        // )}
  

      }
      
        
        // {usernames.usernames.username}
        
        // usernames[usernames].map((username) => userData.username != username ? hasLoggedIn : setLoginError(true))
    
   
  

      

      

return (
  <React.Fragment>
  <div>
    {loginError ? 
      <h2>Username taken. Submit a different username!</h2>
    : 
      <h3>Enter your name to sign up and create your farm!</h3>
    }
    <form onSubmit={handleSubmit} id="login-form">
      <label>
        <input type="text" name="username" onChange={handleChange} className="input-text" placeholder="Your Username"/>
        <input type="text" name="password" onChange={handleChange} className="input-text" placeholder="Your Password"/>
      </label>
      <br />
      <button type="submit" className="submit">
      <h2>SUBMIT</h2>
      </button>
    </form>{!null ? 
          null : 
          <p>Not a valid input. Please try again.</p>
      }
    </div>
    
    </React.Fragment>
    
    );
}