const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");
const { ProductModel } = require("./product");

const ShoppingModel = sequelize.define(
   "shopping",
   {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      products: {
         type: DataTypes.JSON,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
      },
      ci: {
         type: DataTypes.STRING,
      },
      cellphone: {
         type: DataTypes.STRING,
      },
      total: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      verified: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   },
   { timestamps: true }
);
/* 
ProductModel.belongsToMany(ShoppingModel, { through: "CompraProductModel" });
ShoppingModel.belongsToMany(ProductModel, {
   through: "ShoppingModelProductModel",
}); */

module.exports = { ShoppingModel };
