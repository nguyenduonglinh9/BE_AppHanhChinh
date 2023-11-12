const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");
const middleWareAuth = require("../middlewares/auth");

router.use("/create", middleWareAuth, historyController.createOne);
router.use("/", middleWareAuth, historyController.getAll);

module.exports = router;
