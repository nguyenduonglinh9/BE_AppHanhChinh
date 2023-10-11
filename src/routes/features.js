const express = require("express");
const router = express.Router();
const featuresController = require("../controllers/featuresController");

router.use("/", featuresController.index);

module.exports = router;
