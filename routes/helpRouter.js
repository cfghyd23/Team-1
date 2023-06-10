const express = require("express");
const router = express.Router();

const {getHelpForm, createHelpForm, getOneHelpForm, deleteHelp} = require("../controllers/grievance");

router.route("/").get(getHelpForm).post(createHelpForm);
router.route("/:id").get(getOneHelpForm).delete(deleteHelp);

module.exports = router;