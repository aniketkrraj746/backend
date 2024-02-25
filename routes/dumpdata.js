const express = require("express");
const router = express.Router();
const dumpData= require("../controller/dumpData");
const { deleteTable } = require("../controller/deleteTable");
const getAllUsers = require("../controller/getAllUsers");
const currentWeekLeader = require("../controller/currentWeekLeaderBoard");




router.delete('/deleteTable',deleteTable);
router.post("/dumpData",dumpData);
router.get("/getAllUsers",getAllUsers);
router.get("/current_week_leaderboard",currentWeekLeader);
router.get("/UserId/:id",)
module.exports = router;