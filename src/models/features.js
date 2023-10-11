const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featureSchema = new Schema({
  name: { type: String },
  icon: { type: String },
});

module.exports = mongoose.model("option", featureSchema);
