const express = require("express")
const router = express.Router()
const User = require("../models/user")
const Message = require("../models/message")
const asynchandler = require("express-async-handler")
const expressAsyncHandler = require("express-async-handler")
//Select route homepage
exports.userGet = asynchandler(async(req,res) => {
    res.send("Please enter the correct route")
})
//Get ALL posts 
exports.postsGet = asynchandler(async(req,res) => {
    res.json({
        posts: 'All posts...'
    })
})
//Individual User data
exports.userInfo = asynchandler(async(req,res) => {
    res.json({
        info: "User info..."
    })
})
//All comments for a post
exports.individualPost = asynchandler(async(req,res) => {
    res.json({
        post: "This will be the post",
        comments: "Blah Blah Blah",
        user: "User...", 
    })
})
//Create post 
exports.createPost = asynchandler(async(req,res) => {
    res.send("will create a post if user has privlidges")
})
//User login - will pass token in this request
exports.userLogin = asynchandler(async(req,res) => {
    res.send("User logged in")
})
exports.userCreate = asynchandler(async(req,res) => {
    res.send("User created")
})
//Report feature 
exports.reportPost = asynchandler(async(req,res) => {
    res.send("Report has been submitted")
})
//Submit a comment
exports.submitComment = asynchandler(async(req,res) => {
    res.send("Comment has been submitted!")
})
//Admin remove comment 
exports.adminRemoveComment = asynchandler(async(req,res) => {
    res.send("Comment removed")
})