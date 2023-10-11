const Feature = require("../models/features");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

const featuresController = {
  index: async function (req, res, next) {
    if (!req.user) {
      res.json({
        code: 404,
        message: "Bạn Chưa Đăng Nhập",
      });
    } else {
      await Feature.find({})
        .then((features) => {
          res.json(features);
        })
        .catch((err) => next(err));
    }
  },
};

module.exports = featuresController;
