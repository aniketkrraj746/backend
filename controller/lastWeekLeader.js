const db = require("../config/database");

// Display last week leaderboard given a country by the user (Top 200)
const lastWeekLeader = (req, res) => {
  const country = req.body.country;

  // Calculate the start and end date of the last week
  const today = new Date();
  const startOfLastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() - 6
  );
  const endOfLastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );

  // Query to fetch the top 200 scores for the specified country in the last week
  const query = `SELECT UID, Name, Score, Country, TimeStamp FROM candidatescores WHERE Country = '${country}' AND TimeStamp BETWEEN '${startOfLastWeek.toISOString()}' AND '${endOfLastWeek.toISOString()}' ORDER BY Score DESC LIMIT 200`;
  db.query(query, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      console.log(`${result.length} records found.`);
      res.status(200).json({ leaderBoard: result });
    } else {
      console.log("No record found");
      res.status(404).json({
        messgae: "nothein",
      });
      res.json(result);
    }
  });
};
module.exports = lastWeekLeader;
