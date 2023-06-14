const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Model
const UserSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  canPost: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
