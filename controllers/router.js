const express = require("express")
const router = express.Router()
const controller = require("./index")

//Get Requests
//Displays nothin 
router.get("/", controller.userGet)
//Returns all posts in JSON
router.get('/allposts', controller.postsGet)
//Returns individual info on someone in JSON 
router.get('/user/:id', controller.userInfo)
//Returns individual post
router.get("/posts/:id", controller.individualPost)
//POST Request 
router.post("/create/post", controller.createPost)

module.exports = router