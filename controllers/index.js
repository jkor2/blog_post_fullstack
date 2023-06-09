const express = require("express")
const router = express.Router()
const User = require("../models/user")
const Message = require("../models/message")
const asynchandler = require("express-async-handler")
//Select route homepage
exports.userGet = asynchandler(async(req,res) => {
    res.send("Please enter the correct route")
})
//Get all messages
router.get("/messages", (req,res) => {
    res.json({
        Message: "Messages..."
    })
})


