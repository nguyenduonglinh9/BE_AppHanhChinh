const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: { type: String },
  description: { type: String },
  room: { type: String },
  images: [],
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: null },
  receivedAt: { type: Date, default: null },
  completedAt: { type: Date, default: null },
  staffID: { type: String },
  userID: { type: String },
  star: { type: String },
  comment: { type: String },
});

module.exports = mongoose.model("ticket", ticketSchema);
