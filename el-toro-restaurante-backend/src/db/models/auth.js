const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");

const AuthModel = sequelize.define(
   "auth",
   {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
         allowNull: false,
      },
      firstName: {
         type: DataTypes.STRING,
         allowNull: false,
         min: 3,
         max: 20,
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false,
         min: 3,
         max: 20,
      },
      identificationCard: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      fullName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isLowercase: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      role: {
         type: DataTypes.ENUM("admin"),
         default: "admin",
      },
   },
   { timestamps: true }
);

module.exports = { AuthModel };
