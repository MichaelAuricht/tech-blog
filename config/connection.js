const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        username: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        host: '124.170.199.2',
        dialect: 'mysql',
        port: 3306,
    });

module.exports = sequelize;