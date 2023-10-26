const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");
const middleWareAuth = require("../middlewares/auth");

// router.use("/create", middleWareAuth, ticketController.createOne);
router.use("/:id", middleWareAuth, roomController.getOne);
router.use("/", middleWareAuth, roomController.getAll);

module.exports = router;
