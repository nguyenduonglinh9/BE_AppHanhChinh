const passport = require("passport");

const userController = {
  // index: function (req, res, next) {
  //    passport.authenticate("google", { scope: ["profile", "email"] });
  // },
  index: passport.authenticate("google", { scope: ["profile", "email"] }),
  index2: passport.authenticate("google", {
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  }),
  success: function (req, res, next) {
    if (!req.user) res.redirect("/auth/callback/failure");
    res.send(req.user);
  },
  failure: function (req, res, next) {
    res.send("Error");
  },
};

module.exports = userController;
