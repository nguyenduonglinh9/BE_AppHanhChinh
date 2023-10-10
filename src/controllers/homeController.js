const User = require("../models/users");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

const homeController = {
  index: async function (req, res, next) {
    await User.find({})
      .then((users) => {
        // res.render("index", {
        //   users: multipleMongooseToObject(users),
        // });
        res.json(users);
      })
      .catch((err) => next(err));
  },
};

module.exports = homeController;
