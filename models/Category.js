const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Category extends Sequelize.Model {};

Category.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Category id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Category name, string",
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Category color, string",
    },
    iconName: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Category icon name, string",
    },
    user_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Category connection with user, string",
    },
}, { sequelize, modelName: 'categories', tableName: 'categories', timestamps: false })

module.exports = Category;


