const db=require("../config/database");
// Fetch user rank, given the userId
const UserById = (req, res) => {
  const userId = req.body.userId;
  // Query to fetch the rank of the specified user
  const query = `SELECT * from 
(SELECT RANK() OVER(ORDER BY Score DESC) AS rank_place,
  Name,
  UID,
  Score,
  Country
FROM candidatescores) as abcd  WHERE UID = ${userId}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    if(result.length > 0){
      console.log('User found');
      res.send({user: result[0]});
    } else{
      console.log(`No user with ID ${userId} found`);
      res.status(401).send();
    }
  });
    
};
module.exports=UserById;
