const express = require('express');
const userController = require('../controllers/user.js');
const router = express.Router();


router
    .post("/login", userController.login)
    .post("/register", userController.register)
    .post("/setBudget", userController.setUserBudget)
    .post("/setCurrency", userController.setUserCurrency)

module.exports = router;