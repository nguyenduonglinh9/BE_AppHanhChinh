const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: { type: String },
  description: { type: String },
  room: { type: String },
  images: [],
  status: { type: String, default: "pending" },
  createdAt: { type: String, default: null },
  receivedAt: { type: String, default: null },
  completedAt: { type: String, default: null },
  staffID: { type: String },
  userID: { type: String },
  star: { type: String },
  comment: { type: String },
  type: { type: String },
});

module.exports = mongoose.model("ticket", ticketSchema);
