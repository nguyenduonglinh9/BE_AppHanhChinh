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
      const accessToken = jwt.sign({ ...isUser._doc }, keys.accessTokenSecret);
      res.json({
        code: 200,
        message: "Đã có tài khoản trong kho",
        accessToken: accessToken,
        infor: { ...isUser._doc },
      });
    } else {
      try {
        const newUser = new User({
          googleID: req.body.googleID,
          email: req.body.email,
          name: req.body.name,
          createdAt: Date.now(),
          role: null,
          imageURL: req.body.imageURL,
          employeeType: null,
          phone: "",
        });

        newUser.save();

        const accessToken = jwt.sign(
          {
            googleID: req.body.googleID,
            email: req.body.email,
            name: req.body.name,
            createdAt: Date.now(),
            role: null,
            imageURL: req.body.imageURL,
            employeeType: null,
            phone: "",
          },
          keys.accessTokenSecret
        );
        res.json({
          code: 200,
          message: "Tài khoản vừa tạo thành công !",
          accessToken: accessToken,
          infor: {
            googleID: req.body.googleID,
            email: req.body.email,
            name: req.body.name,
            createdAt: Date.now(),
            role: null,
            imageURL: req.body.imageURL,
            employeeType: null,
            phone: "",
          },
        });
      } catch (error) {
        res.json({ error });
      }
    }
  },
};

module.exports = authenController;
