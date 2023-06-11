const asyncHandler = require("express-async-handler");
const Help = require("../models/Help");
//@desc Get the help from details
//@route GET /api/help
//@access public

const getHelpForm = asyncHandler(async(req, res) => {
    const helpForm = await Help.find();
    res.status(200).json(helpForm);
});

//@desc Submit a help form 
//@route POST /api/help
//@access public

const createHelpForm = asyncHandler(async (request, response) => {
    console.log("The request body is : ",request.body);
    const {name, contact, issue, urgency, details} = request.body;
    if(!name || !contact || !issue || !urgency || !details){
        response.status(400);
        throw new Error("All fields are mandatory!");
    }

    const newHelp = await Help.create({
        name,
        contact,
        issue,
        urgency,
        details
    });
    response.status(201).json(newHelp);
});

//@desc Get a specific Help form
//@route GET /api/help/:id
//@access public
const getOneHelpForm = asyncHandler(async (request, response) => {
    const onehelpForm = await Help.findById(request.params.id);
    if(!onehelpForm){
        response.status(404);
        throw new Error("Requested support form not found!");
    }
    response.status(200).json(onehelpForm);
});


//@desc Delete a help form
//@route DELETE /api/activity/:id
//@access private

const deleteHelp = asyncHandler(async (request, response) => {
    const delHelp = await Help.findById(request.params.id);
    if(!delHelp){
        response.status(404);
        throw new Error("Requested support Form not found.");
    }
    // if(delAct.id.toString() != request.user.id){
    //     response.status(403);
    //     throw new Error("User don't have the permission to delete other users' Information.");
    // }
    await Help.deleteOne({_id: request.params.id});
    response.status(200).json(delHelp);
});

module.exports = {getHelpForm, createHelpForm, getOneHelpForm, deleteHelp};