const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const notifications = require("../models/notifications");
const { response } = require("express");

const notificationController = {
  getAll: async (req, res, next) => {
    await notifications
      .find({})
      .then((notifications) => {
        res.json(notifications);
      })
      .catch((err) => next(err));
  },
  createOne: async (req, res, next) => {
    try {
      const newNotification = new notifications({
        title: req.body.title,
        description: req.body.description,
        infor: req.body.infor,
      });

      newNotification.save();
      res.json({
        code: 200,
        message: "Tạo Thông Báo Thành Công",
        infor: newNotification,
      });
    } catch (error) {
      res.json({
        code: 400,
        message: error,
      });
    }
  },
  //   getOne: async (req, res, next) => {
  //     await room
  //       .findOne({ _id: req.params.id })
  //       .then((room) => {
  //         res.json(room);
  //       })
  //       .catch((err) => next(err));
  //   },
  //   updateOne: async (req, res, next) => {
  //     try {
  //       await room.findByIdAndUpdate(req.params.id, {
  //         name: req.body.name,
  //         isReady: req.body.isReady,
  //         assets: req.body.assets,
  //       });
  //       res.json({
  //         code: 200,
  //         message: "success",
  //       });
  //     } catch (error) {
  //       res.json({
  //         code: 400,
  //         message: error,
  //       });
  //     }
  //   },
};

module.exports = notificationController;
