// const mysql = require("mysql");
const mysql = require("mysql2");
require("dotenv").config;
const faker = require("faker");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "backlight", 
});
db.connect((err) => {
  if (err) {
    console.log("Error in db connection", err);
  } else {
    console.log("db connected successfully");
    // for (let i = 0; i < 10000; i++) {
    //   const UID = `user${i}`;
    //   const Name = `user${i}` || i ; // Generate a fake name
    //   const Score = Math.floor(Math.random() * 1000) + 1; // Random score between 1 and 1000
    //   const Country = +Math.floor(Math.random() * 100) + 1; // generate country code between 1 t0 100
    //   const Timestamp = faker.date
    //     .between(new Date(Date.now()), new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    //     .toISOString()
    //     .slice(0, 19)
    //     .replace("T", " "); // Random timestamp between 2022-01-01 and 2024-01-01

    //   const query = `INSERT INTO candidatescores (UID, Name, Score, Country, Timestamp) VALUES ('${UID}', '${Name}', ${Score}, '${Country}', '${Timestamp}')`;
    //   db.query(query, (err, result) => {
    //     if (err) {
    //       throw err;
    //     }
    //     console.log(`Inserted row ${i}`);
    //   }); 
    // }
  }
});

module.exports = db;
 