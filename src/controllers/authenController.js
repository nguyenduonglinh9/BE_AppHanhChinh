const User = require("../models/users");
var jwt = require("jsonwebtoken");
const keys = require("../key");

const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

const authenController = {
  index: async function (req, res, next) {
    const googleID = req.body.googleID;

    const isUser = await User.findOne({ googleID: googleID });

    if (isUser) {
      const accessToken = jwt.sign(req.body, keys.accessTokenSecret);
      res.json({
        code: 200,
        message: "Đăng Nhập Thành Công !",
        accessToken: accessToken,
      });
    }
  },
};

module.exports = authenController;
