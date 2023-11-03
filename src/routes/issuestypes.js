const express = require("express");
const router = express.Router();
const issuesTypeController = require("../controllers/issuesTypeController");
const middleWareAuth = require("../middlewares/auth");

router.use("/", middleWareAuth, issuesTypeController.getAll);

module.exports = router;
