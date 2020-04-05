const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-mysql', 'root', '.Zaphod0216', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;