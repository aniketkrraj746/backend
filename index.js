const db = require("./config/database");
require("mysql2");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const dumpData= require("./controller/dumpData");

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

app.get("/", (req, res) => [
  res.send(`<h1>Backend is running and this is '/' Route</h1>`),
]);
app.get("/allData", (req, res) => {
  const query = `SELECT * FROM candidatescores`;
  db.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    return res.status(200).json(results);
  });
});
// Display current week leaderboard (Top 200)
app.get("/current_week_leaderboard", (req, res) => {
  // Calculate the start and end date of the current week
  const today = new Date();
  const startOfWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );
  const endOfWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() + 6
  );

  // Query to fetch the top 200 scores for the current week
  const query = `SELECT UID, Name, Score, Country, TimeStamp FROM candidatescores WHERE TimeStamp BETWEEN '${startOfWeek.toISOString()}' AND '${endOfWeek.toISOString()}' ORDER BY Score DESC LIMIT 200`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Display last week leaderboard given a country by the user (Top 200)
app.get("/last_week_leaderboard", (req, res) => {
  const country = req.query.country;

  // Calculate the start and end date of the last week
  const today = new Date();
  const startOfLastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()-1
  );
  const endOfLastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() -7
  );

  // Query to fetch the top 200 scores for the specified country in the last week
  const query = `SELECT UID, Name, Score, Country, TimeStamp FROM candidatescores WHERE Country = '${country}' AND TimeStamp BETWEEN '${startOfLastWeek.toISOString()}' AND '${endOfLastWeek.toISOString()}' ORDER BY Score DESC LIMIT 200`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Fetch user rank, given the userId
app.get("/user_rank", (req, res) => {
  const userId = req.query.userId;

  // Query to fetch the rank of the specified user
  const query = `SELECT * FROM candidatescores WHERE UID = '${userId}'`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  }); 
}); 

app.post("/dumpData", dumpData);