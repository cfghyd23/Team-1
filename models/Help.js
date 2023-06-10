const mongoose = require("mongoose");

const helpData = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."],
    },
    contact: {
        type: Number,
        required: [true, "Please enter your contact details"],
    },
    issue: {
        type: String,
        required: [true, "Please mention the issues you are facing"],
    },
    urgency: {
        type: String,
        required: [true, "Please select a category."],
    },
    details: {
        type: String,
        required: [true, "Please mention the underlying details."],
    }
});

module.exports = mongoose.model("Help", helpData);