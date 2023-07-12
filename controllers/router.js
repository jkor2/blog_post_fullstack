const express = require("express");
const router = express.Router();
const controller = require("./index");
const tokenVerify = require("../middlewear/jwtVerify");

//Get Requests
//Displays nothin
router.get("/", controller.userGet);
//Returns all posts along with their commentsin JSON
router.get("/api/allposts", tokenVerify, controller.postsGet);
//Returns individual info on someone in JSON
router.get("/api/user/:id", controller.userInfo);
//Returns individual post
router.get("/posts/:id", controller.individualPost);
//Create post POST Request
router.get("/posts/admin/create", tokenVerify, controller.createPost);
router.post("/posts/admins/create", tokenVerify, controller.postPost);
//User login
router.post("/user/login", controller.userLogin);
//User sign up
router.post("/user/create", controller.userCreate);
//Submit comment
router.post("/submit/comment", controller.submitComment);
//Admin remove comment
router.post("/admin/remove/comment", controller.adminRemoveComment);
//Update a post **User should only be able to edit their own posts
router.put("/api/posts/:id/edit", controller.userPostEdit);
//posting a like to a message
router.post("/api/message/like/:id", tokenVerify, controller.likeMessage);

module.exports = router;
