const faker = require("faker");
const db = require("../config/database")
const dumpData=()=>{
  for (let i = 0; i < 10000; i++) {
    const UID = i;
    const Name = `user${i}` || i ; // Generate a fake name
    const Score = Math.floor(Math.random() * 1000) + 1; // Random score between 1 and 1000
    const Country = +Math.floor(Math.random() * 100) + 1; // generate country code between 1 t0 100
    const Timestamp = faker.date
      .between(new Date(Date.now()), new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
      .toISOString()
      .slice(0, 19)
      .replace("T", " "); // Random timestamp between 2022-01-01 and 2024-01-01
    const query = `INSERT INTO candidatescores (UID, Name, Score, Country, Timestamp) VALUES ('${UID}', '${Name}', ${Score}, '${Country}', '${Timestamp}')`;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(`Inserted row ${i}`);
    });
  }
};
module.exports = dumpData;