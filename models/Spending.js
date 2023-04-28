const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Spending extends Sequelize.Model {};

Spending.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Spending id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending name, string",
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending amount, string",
    },
    comment: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending comment, string",
    },
    frequency: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending frequency, string",
    },
    notificationDateStart: {
        type: Sequelize.DATE,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending notificationDateStart, string",
    },
    isScheduled: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending isScheduled, string",
    },
    isCompleted: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending isCompleted, string",
    },
    creationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending creationDate, string",
    },
    completionDate: {
        type: Sequelize.DATE,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending completionDate, string",
    },
    categoryId: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending categoryId, string",
    },
    user_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending user_id, string",
    },
}, { sequelize, modelName: 'spendings', tableName: 'spendings', timestamps: false })

module.exports = Spending;


