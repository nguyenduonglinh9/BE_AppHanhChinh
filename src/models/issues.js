const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  name: { type: String },
  idType: { type: String },
});

module.exports = mongoose.model("issue", issueSchema);
