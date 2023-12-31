const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: { type: String },
  floor: { type: Array },
  description: { type: String },
});

module.exports = mongoose.model("building", buildingSchema);
