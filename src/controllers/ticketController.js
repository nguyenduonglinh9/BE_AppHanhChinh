const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");
const ticket = require("../models/tickets");
const { response } = require("express");

const ticketController = {
  getAll: async (req, res, next) => {
    await ticket
      .find({})
      .then((tickets) => {
        res.json(tickets);
      })
      .catch((err) => next(err));
  },

  getOne: async (req, res, next) => {
    await ticket
      .findOne({ _id: req.params.slug })
      .then((ticket) => {
        res.json(ticket);
      })
      .catch((err) => next(err));
  },

  createOne: async (req, res, next) => {
    try {
      const newTicket = new ticket({
        title: req.body.title,
        description: req.body.description,
        room: req.body.room,
        images: [...req.body.images],
        status: req.body.status,
        createdAt: req.body.createdAt,
        receivedAt: req.body.receivedAt,
        completedAt: req.body.completedAt,
        staffID: req.body.staffID,
        userID: req.body.userID,
        star: req.body.star,
        comment: req.body.comment,
        type: req.body.type,
        note: req.body.note,
        time: req.body.time,
        build: req.body.build,
        reason: req.body.reason,
      });

      await newTicket.save();
      res.json({
        code: 200,
        message: "Tạo Phiếu Hỗ Trợ Thành Công",
        infor: newTicket,
      });
    } catch (error) {
      res.json({
        code: 400,
        message: error,
      });
    }
  },
  updateOne: async (req, res, next) => {
    try {
      await ticket.findByIdAndUpdate(req.params.slug, {
        status: req.body.status,
        receivedAt: req.body.receivedAt,
        completedAt: req.body.completedAt,
        staffID: req.body.staffID,
        reason: req.body.reason,
        time: req.body.time,
        note: req.body.note,
        star: req.body.star,
        comment: req.body.comment,
      });

      res.json({ code: 200, message: "Cập Nhật Thành Công" });
    } catch (error) {
      res.json({ code: 400, message: "LỖI : " + error });
    }
  },
};

module.exports = ticketController;
