const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Message Model
const MessageSchema = new Schema({
  message: { type: String, required: true },
  title: { type: String, required: true },
  uaer: { type: ObjectId, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", MessageSchema);
