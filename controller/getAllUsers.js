const db = require("../config/database");
const getAllUsers= (req,res) => {
  const query = `SELECT * FROM candidatescores`;
  db.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    return res.status(200).json(results);
  });
}
module.exports = getAllUsers;
