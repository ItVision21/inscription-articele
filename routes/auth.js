const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');
//when submit with post
router.post('/register',authController.register);

module.exports = router;