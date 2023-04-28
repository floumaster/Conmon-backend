const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'conmon',
    'postgres',
    '66lularo', {
        dialect: 'postgres',
        timestamps: false,
    },
)

module.exports = sequelize