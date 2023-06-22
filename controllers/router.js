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
router.get("/api/posts/:id", controller.individualPost);
//Create post POST Request
router.post("/create/post", controller.createPost);
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

module.exports = router;
