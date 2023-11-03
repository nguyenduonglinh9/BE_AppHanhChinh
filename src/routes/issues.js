const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issueController");
const middleWareAuth = require("../middlewares/auth");

router.use("/", middleWareAuth, issueController.getAll);

module.exports = router;
