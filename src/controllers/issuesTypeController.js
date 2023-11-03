const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const issuestypes = require("../models/issuestypes");
const { response } = require("express");

const issuesTypeController = {
  getAll: async (req, res, next) => {
    await issuestypes
      .find({})
      .then((issuestypes) => {
        res.json(issuestypes);
      })
      .catch((err) => next(err));
  },
  getOne: async (req, res, next) => {
    await issuestypes
      .findOne({ _id: req.params.id })
      .then((issuestype) => {
        res.json(issuestype);
      })
      .catch((err) => next(err));
  },
};

module.exports = issuesTypeController;
