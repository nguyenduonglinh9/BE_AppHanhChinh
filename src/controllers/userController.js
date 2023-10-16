const passport = require("passport");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const User = require("../models/users");

const userController = {
  getAll: async (req, res, next) => {
    await User.find({})
      .then((users) => {
        res.json(users);
      })
      .catch((err) => next(err));
  },

  getOne: async (req, res, next) => {
    await User.findOne({ googleID: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => next(err));
  },
};

module.exports = userController;
