const express = require("express");
const router = express.Router();
const {dumpData}= require("../controller/dumpData");
router.post("/dumpData",dumpData);
module.exports = router;