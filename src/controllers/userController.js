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
  getStaff: async (req, res, next) => {
    await User.find({ role: "staff" })
      .then((staffs) => res.json(staffs))
      .catch((err) => next(err));
  },
  getAdmin: async (req, res, next) => {
    await User.find({ role: "admin" })
      .then((admins) => res.json(admins))
      .catch((err) => next(err));
  },
  updateUser: async (req, res, next) => {
    try {
      const newUser = await User.findOneAndUpdate(
        { googleID: req.params.id },
        {
          role: req.body.role,
          employeeType: req.body.employeeType,
        },
        {
          new: true,
        }
      );
      if (newUser) {
        res.json({ code: 200, message: newUser });
      } else {
        res.json({ code: 400, message: "error" });
      }
    } catch (error) {
      res.json({ code: 400, message: "LỖI : " + error });
    }
  },
};

module.exports = userController;
