const { Sequelize } = require("sequelize");

//init database
const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;

