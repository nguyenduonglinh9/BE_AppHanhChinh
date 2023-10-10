const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

// router.use("/:slug", newsController.detail);
// router.use("/auth/google", loginController.auth);
router.use("/", loginController.index);

module.exports = router;
