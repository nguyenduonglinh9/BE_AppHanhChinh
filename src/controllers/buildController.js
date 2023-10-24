const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const building = require("../models/builds");
const { response } = require("express");

const buildController = {
  getAll: async (req, res, next) => {
    await building
      .find({})
      .then((buildings) => {
        res.json(buildings);
      })
      .catch((err) => next(err));
  },
};

module.exports = buildController;
