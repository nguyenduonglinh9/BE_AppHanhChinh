const express = require("express");
const router = express.Router();
const featuresController = require("../controllers/featuresController");
const middleWareAuth = require("../middlewares/auth");

router.use("/", middleWareAuth, featuresController.index);

module.exports = router;
