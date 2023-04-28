const express = require('express');
const templateController = require('../controllers/templates')
const router = express.Router();


router
    .post("/getAllUserTemplates", templateController.getAllUserTemplates)
    .post("/createUserTemplate", templateController.createUserTemplate)
    .put("/applyUserTemplate", templateController.applyUserTemplate)

module.exports = router;