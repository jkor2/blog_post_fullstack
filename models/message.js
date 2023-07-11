const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Message Model
const MessageSchema = new Schema({
  message: { type: String, required: true },
  title: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 },
});

MessageSchema.methods.like = () => {
  this.likes += 1;
};

module.exports = mongoose.model("Message", MessageSchema);
