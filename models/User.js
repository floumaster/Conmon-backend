const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class User extends Sequelize.Model {};

User.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "User's id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's name, string",
    },
    surname: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's surname, string",
    },
    monthBudget: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's month budget, int",
    },
    currency: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's currency, string",
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's email, string",
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's password, string",
    },
    fcmToken: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "User's fcmToken, string",
    },
}, { sequelize, modelName: 'users', tableName: 'users', timestamps: false })

module.exports = User;


