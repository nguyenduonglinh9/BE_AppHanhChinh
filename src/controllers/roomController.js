const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const room = require("../models/rooms");
const { response } = require("express");

const roomController = {
  getAll: async (req, res, next) => {
    await room
      .find({})
      .then((rooms) => {
        res.json(rooms);
      })
      .catch((err) => next(err));
  },
  getOne: async (req, res, next) => {
    await room
      .findOne({ id: req.params.id })
      .then((room) => {
        res.json(room);
      })
      .catch((err) => next(err));
  },
};

module.exports = roomController;
