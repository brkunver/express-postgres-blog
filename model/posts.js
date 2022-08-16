const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

//posts table model

const posts = sequelize.define("posts", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
});

module.exports = posts;
