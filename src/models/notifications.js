const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notifiationSchema = new Schema({
  title: { type: String },
  description: { type: String },
  infor: { type: Object },
});

module.exports = mongoose.model("notification", notifiationSchema);
