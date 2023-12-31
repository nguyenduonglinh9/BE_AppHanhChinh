const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.use("/", homeController.index);

module.exports = router;
