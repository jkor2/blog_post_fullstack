const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = require("mongodb")

//Comment Model 
const CommentSchema = new Schema({
    message: {type: String, required: true},
    user: {type: ObjectId, required: true},
    date: {type: Date, default: Date.now},
    likes: {type: Number, default: 0}, 
    article: {type: ObjectId, required: true}
})

module.exports = mongoose.model("Comment", CommentSchema)
