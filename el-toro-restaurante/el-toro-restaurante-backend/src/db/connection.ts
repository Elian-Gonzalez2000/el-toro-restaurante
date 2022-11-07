const { Sequelize } = require("sequelize");
const env = require("dotenv");

env.config();

// destructuring environment variables
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "../../config";

// Sequelize connection
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/restaurantdb`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

export { sequelize };
