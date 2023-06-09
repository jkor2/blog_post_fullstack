const express = require("express")
const router = express.Router()
const controller = require("./index")

//Displays nothin 
router.get("/", controller.userGet)
//Returns all posts in JSON
router.get('/allposts', controller.postsGet)
//Returns individual info on someone in JSON 
router.get('/user/:id', controller.userInfo)
//Returns all comments

module.exports = router