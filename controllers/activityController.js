const asyncHandler = require("express-async-handler");
const Activity = require("../models/activityForm");
//@desc Get the user well being
//@route GET /api/activity
//@access public

const getActivityForm = asyncHandler(async(req, res) => {
    const activityForm = await Activity.find();
    res.status(200).json(activityForm);
});

//@desc Submit a well-being status
//@route POST /api/activity
//@access public

const createActivityForm = asyncHandler(async (request, response) => {
    console.log("The request body is : ",request.body);
    const {name, age, homeLocation, learnings, feelings, talk} = request.body;
    if(!name || !age || !homeLocation || !learnings || !feelings || !talk){
        response.status(400);
        throw new Error("All fields are mandatory!");
    }

    const newActivity = await Activity.create({
        name,
        age,
        homeLocation,
        learnings,
        feelings,
        talk
    });
    response.status(201).json(newActivity);
});

//@desc Get a specific wellbeing form
//@route PUT /api/activity/:id
//@access public
const getOneActivityForm = asyncHandler(async (request, response) => {
    const oneForm = await Activity.findById(request.params.id);
    if(!oneForm){
        response.status(404);
        throw new Error("Requested Well-being form not found!");
    }
    response.status(200).json(oneForm);
});


//@desc Delete a contact
//@route DELETE /api/activity/:id
//@access private

const deleteActivity = asyncHandler(async (request, response) => {
    const delAct = await Activity.findById(request.params.id);
    if(!delAct){
        response.status(404);
        throw new Error("Requested Well-being Form not found.");
    }
    // if(delAct.id.toString() != request.user.id){
    //     response.status(403);
    //     throw new Error("User don't have the permission to delete other users' Information.");
    // }
    await Activity.deleteOne({_id: request.params.id});
    response.status(200).json(delAct);
});

module.exports = {getActivityForm, createActivityForm, getOneActivityForm, deleteActivity};