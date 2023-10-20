const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const middleWareAuth = require("../middlewares/auth");

router.use("/:slug", middleWareAuth, ticketController.getOne);
router.use("/create", middleWareAuth, ticketController.createOne);
router.use("/", middleWareAuth, ticketController.getAll);

module.exports = router;
