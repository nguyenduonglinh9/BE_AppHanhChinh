const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: { type: String },
  email: { type: String },
  name: { type: String },
  createdAt: { type: Date },
  role: { type: String, default: null },
  imageURL: { type: String },
  employeeType: { type: String, default: null },
});

module.exports = mongoose.model("user", userSchema);
