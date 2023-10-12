const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");

router.use("/", authenController.index);

module.exports = router;
