const passport = require("passport");

const loginController = {
  index: function (req, res, next) {
    res.render("login");
  },
};

module.exports = loginController;
