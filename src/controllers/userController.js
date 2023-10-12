const passport = require("passport");

const userController = {
  index: passport.authenticate("google", { scope: ["profile", "email"] }),

  index2: passport.authenticate("google", {
    successRedirect: "exp://192.168.1.129:8081",
    // successRedirect: "/auth/callback/success",
    failureRedirect: "exp://192.168.1.129:8081",
  }),

  success: function (req, res, next) {
    if (!req.user) {
      res.redirect("/auth/callback/failure");
    } else {
      if (req.user.code == 500) {
        res.json({
          code: 500,
          message: "Vui Lòng Chọn Tài Khoản FPT Polytechnic !",
        });
      } else {
        res.json({
          code: 200,
          message: "Đăng Nhập Thành Công !",
          infor: req.user,
        });
      }
    }
  },
  failure: function (req, res, next) {
    console.log(req);
    res.json({
      code: 500,
      message: "Lỗi Máy Chủ Vui Lòng Thử Lại !",
    });
  },
};

module.exports = userController;
