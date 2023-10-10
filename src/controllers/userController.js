const passport = require("passport");

const userController = {
  index: passport.authenticate("google", { scope: ["profile", "email"] }),

  index2: passport.authenticate("google", {
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  }),

  success: function (req, res, next) {
    if (!req.user) res.redirect("/auth/callback/failure");
    res.json({
      code: 200,
      message: "Đăng Nhập Thành Công !",
      infor: req.user,
    });
  },
  failure: function (req, res, next) {
    res.json({
      code: 500,
      message: "Lỗi Máy Chủ Vui Lòng Thử Lại !",
    });
  },
};

module.exports = userController;
