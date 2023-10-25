const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const middleWareAuth = require("../middlewares/auth");

router.use("/update/:slug", middleWareAuth, ticketController.updateOne);
router.use("/create", middleWareAuth, ticketController.createOne);
router.use("/:slug", ticketController.getOne);
router.use("/", middleWareAuth, ticketController.getAll);

module.exports = router;
