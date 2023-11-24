require("dotenv").config();
const Sequelize = require('sequelize');

//import data dari .env
const DB_Name = process.env.DB_Name;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

//connect to database
//Sequelize(nama_db, username_db, password_db, {option})
const my_db = new Sequelize(DB_Name, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql"
})

module.exports = my_db;