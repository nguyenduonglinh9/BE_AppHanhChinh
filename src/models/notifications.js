const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notifiationSchema = new Schema({
  title: { type: String },
  description: { type: String },
  infor: { type: Object },
  isCheck: { type: Boolean, default: false },
});

module.exports = mongoose.model("notification", notifiationSchema);
