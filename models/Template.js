const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Template extends Sequelize.Model {};

Template.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Template id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Template name, string",
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Template description, string",
    },
    isApplied: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Template isApplied, int",
    },
    user_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Template user_id, string",
    },
}, { sequelize, modelName: 'templates', tableName: 'templates', timestamps: false })

module.exports = Template;


