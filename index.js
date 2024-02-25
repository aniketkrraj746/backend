const db = require("./config/database");
require("mysql2");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const userRoutes = require("./routes/dumpdata")
const dumpData= require("./controller/dumpData");
const { deleteTable } = require("./controller/deleteTable");
const getAllUsers = require("./controller/getAllUsers");

app.use(cors());
app.use(express.json());
app.use("/api/v1",userRoutes);
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

app.get("/", (req, res) => [
  res.send(`<h1>Backend is running and this is '/' Route</h1>`),
]);





// Fetch user rank, given the userId
app.get("/allData",getAllUsers); // Get all data from users table
app.post("/dumpData", dumpData);
app.delete("/deleteTable",deleteTable);