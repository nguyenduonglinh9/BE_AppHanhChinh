const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// router.use("/:slug", newsController.detail);
// router.use("/auth/google", loginController.auth);
router.use("/", homeController.index);

module.exports = router;
