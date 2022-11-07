const dotenv = require("dotenv").config();

const { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, PORT } = process.env;
export { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, PORT };
