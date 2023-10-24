const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: { type: String },
  description: { type: String },
  room: { type: String },
  images: [],
  status: { type: String, default: "pending" },
  createdAt: { type: String },
  receivedAt: { type: String },
  completedAt: { type: String },
  staffID: { type: String },
  userID: { type: String },
  star: { type: String },
  comment: { type: String },
  type: { type: String },
  note: { type: String },
  time: { type: String },
  build: { type: String },
});

module.exports = mongoose.model("ticket", ticketSchema);
