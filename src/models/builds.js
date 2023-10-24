const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: { type: String },
  floor: { type: Array },
});

module.exports = mongoose.model("building", buildingSchema);
