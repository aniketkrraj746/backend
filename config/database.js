// const mysql = require("mysql");
const mysql = require("mysql2");
const fs=require('fs');
require("dotenv").config;
const faker = require("faker");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.port,
  rejectUnauthorized: false,
  // ssl: {
  //   rejectUnauthorized: true, // Set to true for stricter validation (optional)
  //   ca: process.env.ca

  // },
  // ssl: {
  //   ca: fs.readFileSync("../../../Downloads/ca.pem"),
  // },

  // host: "localhost",
  // user: "root",
  // password: "123456",
  // database: "backlight",
  // port: "3306",
});
db.connect((err) => {
  if (err) {
    console.log("Error in db conection", err);
  } else {
    console.log("db connected successfully");
  }
});

module.exports = db;
