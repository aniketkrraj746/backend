const db=require("../config/database");
const deleteTable=()=>{
    const query = `DELETE FROM candidatescores`;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("Table deleted");
    //   console.log(`Inserted row ${i}`);
    });
  
}
module.exports=deleteTable;