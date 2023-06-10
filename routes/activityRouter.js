const express = require("express");
const router = express.Router();

const {getActivityForm, createActivityForm, getOneActivityForm, deleteActivity} = require("../controllers/activityController");

router.route("/").get(getActivityForm).post(createActivityForm);
router.route("/:id").get(getOneActivityForm).delete(deleteActivity)

module.exports = router;