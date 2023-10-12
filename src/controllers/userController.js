const passport = require("passport");

const userController = {
  index: passport.authenticate("google", { scope: ["profile", "email"] }),

  index2: passport.authenticate("google", {
    // successRedirect: "exp://192.168.1.129:8081",
    // failureRedirect: "exp://192.168.1.129:8081",
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
    failureMessage: true,
  }),
  success: function (req, res, next) {
    if (!req.user) {
      res.redirect("/auth/callback/failure");
    } else {
      res.send(req.user);
    }
  },
  failure: function (req, res, next) {
    res.send(req.session.message);
  },
};

module.exports = userController;
