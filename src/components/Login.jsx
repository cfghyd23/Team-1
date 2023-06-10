import React from 'react';
import './Registration Form CSS.css'
  
const MultipleInputs = () => {
  
    return(
        <body>
  <form>
    <div class="loginbox">
    

    <h1>Login Here</h1>
    
    
    <p>User Name</p>
    <input type="text" name="" placeholder="Enter UserName" required/>
    <br></br>
    <p>Email ID</p>
    <input type="email" name="" placeholder="Enter Email ID" />
    <br></br>
    <p>Password</p>
    <input type="text" name="" placeholder="Enter Password" required/>
    <br></br>
    <button type="submit">Login</button>
    </div> 
      </form>
    </body>
    )
  }
  export default MultipleInputs