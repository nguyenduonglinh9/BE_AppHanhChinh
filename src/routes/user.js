const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use("/callback/failure", userController.failure);

router.use("/callback/success", userController.success);

router.use("/callback", userController.index2);
router.use("/", userController.index);

module.exports = router;
