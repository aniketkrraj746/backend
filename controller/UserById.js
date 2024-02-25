const db=require("../config/database");
// Fetch user rank, given the userId
const UserById= (req, res) => {
  const userId = req.query.userId;

  // Query to fetch the rank of the specified user
  const query = `SELECT * FROM candidatescores WHERE UID = '${userId}'`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};
module.exports=UserById;
