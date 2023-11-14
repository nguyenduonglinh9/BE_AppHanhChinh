const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const middleWareAuth = require("../middlewares/auth");

router.use("/create", middleWareAuth, notificationController.createOne);
router.use("/", middleWareAuth, notificationController.getAll);

module.exports = router;
