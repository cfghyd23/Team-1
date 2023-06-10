import React from 'react';
import './Registration Form CSS.css'
  
const Login = () => {
  
    return(
        <body>
  <form>

  <h1>Login Here</h1>
    <div class="container">
    
    
    <p>User Name</p>
    <input type="text" name="" placeholder="Enter UserName" required/>
    <br></br>
    <p>Email ID</p>
    <input type= "text" name="" placeholder="Enter Email ID" />
    <br></br>
    <p>Password</p>

    <input type="text" name="" placeholder="Enter Password" required/>
    <br></br>

    <button type="submit" className='logins'>Login</button>
   
   </div>
      </form>
    </body>
    )
  }
  export default Login;

   