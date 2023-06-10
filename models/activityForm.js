const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."],
    },
    age:{
        type: Number,
        required: [true, "Please enter the age."]
    },
    homeLocation: {
        type: String,
        required: true
    },
    learnings: {
        type: String,
        required: [true, "Let us know what you have learnt today!"]
    },
    feelings: {
        type: String,
        required: [true, "How are you feeling?"]
    },
    talk: {
        type: String,
        required: [true, "Let us know if you want to talk to us."]
    }
});

module.exports = mongoose.model("Activity", activitySchema);


