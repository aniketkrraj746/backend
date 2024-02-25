const db= require("../config/database");
// Display current week leaderboard (Top 200)
const currentWeekLeader= (req,res) => {
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
};

module.exports = currentWeekLeader;
