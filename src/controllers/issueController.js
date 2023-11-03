const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const issues = require("../models/issues");
const { response } = require("express");

const issueController = {
  getAll: async (req, res, next) => {
    await issues
      .find({})
      .then((issues) => {
        res.json(issues);
      })
      .catch((err) => next(err));
  },
  getOne: async (req, res, next) => {
    await issues
      .findOne({ _id: req.params.id })
      .then((issue) => {
        res.json(issue);
      })
      .catch((err) => next(err));
  },
};

module.exports = issueController;
