const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String },
  isReady: { type: Boolean },
  assets: { type: Array },
});

module.exports = mongoose.model("room", roomSchema);
