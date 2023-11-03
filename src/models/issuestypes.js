const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issuestypeSchema = new Schema({
  name: { type: String },
});

module.exports = mongoose.model("issuestype", issuestypeSchema);
