const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/authController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/current", validateToken, currentUser);

module.exports = router;