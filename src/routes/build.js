const express = require("express");
const router = express.Router();
const buildController = require("../controllers/buildController");
const middleWareAuth = require("../middlewares/auth");

// router.use("/create", middleWareAuth, ticketController.createOne);
// router.use("/:slug", ticketController.getOne);
router.use("/:id", buildController.getOne);
router.use("/", middleWareAuth, buildController.getAll);

module.exports = router;
