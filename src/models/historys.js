const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  description: { type: String },
  createdAt: { type: String },
});

module.exports = mongoose.model("history", historySchema);
