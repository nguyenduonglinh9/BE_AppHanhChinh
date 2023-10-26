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
      .findOne({ _id: req.params.id })
      .then((room) => {
        res.json(room);
      })
      .catch((err) => next(err));
  },
  updateOne: async (req, res, next) => {
    try {
      await room.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isReady: req.body.isReady,
        assets: req.body.assets,
      });
      res.json({
        code: 200,
        message: "success",
      });
    } catch (error) {
      res.json({
        code: 400,
        message: error,
      });
    }
  },
};

module.exports = roomController;
