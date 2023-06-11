const asyncHandler = require("express-async-handler");
const Young = require("../models/youngUsers");

//@desc Get the details
//@route GET /api/younguser
//@access public

const getUserDetails = asyncHandler(async(req, res) => {
    const users = await Young.find();
    res.status(200).json(users);
});


//@desc Put a user / update a user
//@route PUT /api/younguser/:id
//@access public

const updateYoungUser = asyncHandler(async (request, response) => {
    const updateUSer = await Young.findById(request.params.id);
    if(!updateUSer){
        response.status(404);
        throw new Error("Contact not found!");
    }

    // if(contact.user_id.toString() != request.user.id){
    //     response.status(403);
    //     throw new Error("User don't have the permission to update other user contacts!");
    // }
    const updatedYoung = await Young.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true}

    );
    response.status(200).json(updatedYoung);
});

//@desc Delete a younguser
//@route DELETE /api/younguser/:id
//@access public

const deleteYoungUser = asyncHandler(async (request, response) => {
    const delUser = await Young.findById(request.params.id);
    if(!delUser){
        response.status(404);
        throw new Error("Contact not found!");
    }
    // if(contact.user_id.toString() != request.user.id){
    //     response.status(403);
    //     throw new Error("User don't have the permission to delete    other user contacts!");
    // }
    await Young.deleteOne({_id: request.params.id});
    response.status(200).json(delUser);
});


module.exports = {getUserDetails, updateYoungUser, deleteYoungUser};