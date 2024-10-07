const sequelize = require('sequelize');
const db = new sequelize('postagens', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});