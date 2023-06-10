import React from 'react';
import './Registration Form CSS.css'
  
const Register = () => {
  
    return(
        <body>
  <form>

  <h1>Register Here</h1>
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
    <p>Phone Number</p>
    <input type="number" name="" placeholder="Enter Phone Number" required/>
    <br></br>
    <p>Age</p>
    <input type="number" name="" placeholder="Enter the age" required/>
    <br></br>
    <p>Valid choice</p>
    <input type="name" name="" placeholder="Please enter valid choice" required/>
    <br></br>
    <p>Employeement Status</p>
    <input type="text" name="" placeholder="Enter the employement status" required/>
    <br></br>
    <p>Employee Salary</p>
    <input type="number" name="" placeholder="Enter the employee salary" required/>
    <br></br>
    <p>Address</p>
    <input type="text" name="" placeholder="Enter the address" required/>
    <br></br>
    <p>Home Location</p>
    <input type="text" name="" placeholder="Enter the home location" required/>
    <br></br>
    <p>Work Location</p>
    <input type="text" name="" placeholder="Enter the work location" required/>
    <br></br>


    <br></br>
    <button type="submit" className='logins'>Register</button>
   
   </div>
      </form>
    </body>
    )
  }
  export default Register;
