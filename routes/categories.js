const express = require('express');
const categoryController = require('../controllers/category.js');
const router = express.Router();


router
    .post("/getAllUserCategories", categoryController.getAllUserCategories)
    .post("/createUserCategory", categoryController.createUserCategory)
    .put("/editUserCategory", categoryController.editUserCategory)

module.exports = router;