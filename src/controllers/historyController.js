const history = require("../models/historys");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

const historyController = {
  getAll: async function (req, res, next) {
    await history
      .find({})
      .then((histories) => {
        // res.render("index", {
        //   users: multipleMongooseToObject(users),
        // });
        res.json(multipleMongooseToObject(histories));
      })
      .catch((err) => next(err));
  },

  createOne: async function (req, res, next) {
    try {
      const newHistory = new history({
        description: req.body.description,
        createdAt: req.body.createdAt,
      });

      await newHistory.save();
      res.json({
        code: 200,
        message: "Tạo lịch sử thành công",
        infor: newHistory,
      });
    } catch (error) {
      res.json({
        code: 400,
        message: error,
      });
    }
  },
};

module.exports = historyController;
