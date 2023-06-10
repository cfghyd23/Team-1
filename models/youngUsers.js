const mongoose = require("mongoose");

const youngUserSchema = mongoose.Schema({
    username:{
        type: String,
        required:[true, "This is a mandatory field"],
        unique: [true, "Username must be unique!"]
    },
    email:{
        type:String,
        required: [true, "This is a mandatory field"],
    },
    password:{
        type: String, 
        required: [true, "This is a mandatory field!"]
    },
    phone:{
        type: Number,
        required:[true, "Plase enter the phone number"],
    },
    age:{
        type: Number,
        required: [true, "Please enter the age."]
    },
    alumni:{
        type: String,
        required:[true, "Please enter a valid choice"],
    },
    empStatus:{
        type: String,
        required: [true, "Please mention your employement status"],
    },
    empSalary:{
        type: Number,
        required: [true, "Please mention your salary"],
    },
    workLocation: {
        type: String,
        required: [true, "Pleas mention you work location"],
    },
    homeLocation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Young", youngUserSchema);