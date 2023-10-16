const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middleWareAuth = require("../middlewares/auth");

router.use("/:id", userController.getOne);
router.use("/", userController.getAll);

module.exports = router;
