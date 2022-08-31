"use strict";
const express = require("express");
const { Sequelize } = require("sequelize");
const env = require("dotenv");
const cors = require("cors");
const app = express();
env.config();
// destructuring environment variables
const { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, PORT } = process.env;
// Sequelize connection
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/restaurantdb`, {
    logging: false,
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})
    .authenticate()
    .then(() => {
    console.log("Database Connected");
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "hello from server",
    });
});
app.listen(PORT || 3001, () => {
    console.log(`Server is running on PORT ${PORT || 3001}`);
});
