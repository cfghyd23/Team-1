const asyncHandler = require("express-async-handler");
const Young = require("../models/youngUsers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//@desc Register the user
//@route POST /api/auth/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password, phone, age, alumni, empStatus, empSalary, workLocation, homeLocation} = req.body;
    if (!username || !email || !password || !phone || !age || !alumni || !empStatus || !empSalary || !workLocation || !homeLocation) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const userAvailable = await Young.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await Young.create({
      username,
      email,
      password: hashedPassword,
      phone,
      age,
      alumni,
      empStatus,
      empSalary,
      workLocation,
      homeLocation
    });
  
    console.log(`User created ${user}`);
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("User data us not valid");
    }
    res.json({ message: "Register the user" });
  });


//@desc Login the user
//@route POST /api/auth/login
//@access public

const loginUser = asyncHandler(async(request, response) => {
    const {username, password} = request.body;
    if(!username || !password){
      response.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await Young.findOne({username});
    if(!user){
      response.status(400);
      throw new Error("The User is not registered. Please register first!");
    }
    if(user && (await bcrypt.compare(password, user.password))){
      const accessToken = jwt.sign({
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: "30m"})
      response.status(200).json({accessToken});
    }
    else{
      response.status(401);
      throw new Error("The Email or Password is not valid!");
    }
  });


  //@desc Current user
//@route POST /api/auth/current
//@access public

const currentUser = asyncHandler(async(request, response) => {
    response.json({message : 'Current user information!'});
});



module.exports = {registerUser, loginUser, currentUser};