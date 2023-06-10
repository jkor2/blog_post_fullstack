const express = require("express")
const router = express.Router()
const controller = require("./index")

//Get Requests
//Displays nothin 
router.get("/", controller.userGet)
//Returns all posts along with their commentsin JSON
router.get('/api/allposts', controller.postsGet)
//Returns individual info on someone in JSON 
router.get('/api/user/:id', controller.userInfo)
//Returns individual post
router.get("/api/posts/:id", controller.individualPost)
//Create post POST Request 
router.post("/api/create/post", controller.createPost)
//User login 
router.post("/user/login", controller.userLogin)
//User sign up 
router.post("/user/create", controller.userCreate)
//Blog report feature 
router.post("/api/posts/:id/report", controller.reportPost)

module.exports = router