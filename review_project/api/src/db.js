const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/repaso`,
  { logging: false }
);

sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true, //unique es un constrain
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: false }
);

module.exports = { sequelize };
