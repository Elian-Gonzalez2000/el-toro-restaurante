const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");

const ProductModel = sequelize.define(
   "product",
   {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      slug: {
         type: DataTypes.STRING,
         allowNull: false,
         isLowercase: true,
      },
      price: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      quantity: {
         type: DataTypes.INTEGER,
         allowNull: true,
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
      productPicture: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      category: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      createdBy: {
         type: DataTypes.STRING,
         allowNull: true,
      },
   },
   { timestamps: true }
);

module.exports = { ProductModel };
