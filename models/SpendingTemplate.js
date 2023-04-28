const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class SpendingTemplate extends Sequelize.Model {};

SpendingTemplate.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        comment: "Spending_template id, text",
    },
    spending_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending_template spending_id, text",
    },
    template_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Spending_template template_id, text",
    },
}, { sequelize, modelName: 'templates_spendings', tableName: 'templates_spendings', timestamps: false })

module.exports = SpendingTemplate;


