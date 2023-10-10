const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: { type: String },
  email: { type: String },
  name: { type: String },
});

module.exports = mongoose.model("user", userSchema);
