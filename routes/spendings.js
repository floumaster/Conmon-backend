const express = require('express');
const spendingController = require('../controllers/spending');
const router = express.Router();


router
    .post("/getAllUserSpendings", spendingController.getAllUserSpendings)
    .post("/createUserSpending", spendingController.createUserSpending)
    .put("/completeUserSpending", spendingController.completeUserSpending)

module.exports = router;