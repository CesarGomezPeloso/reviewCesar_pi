const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/repaso`,
  { logging: false }
);



module.exports = { sequelize };
