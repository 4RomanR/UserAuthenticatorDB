const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const emailCode = sequelize.define('emailCode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //userId
});

module.exports = emailCode; 