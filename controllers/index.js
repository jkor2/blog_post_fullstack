const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Message = require("../models/message");
const asynchandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenVerify = require("../middlewear/jwtVerify");
const user = require("../models/user");
const async = require("async");

require("dotenv").config();

//test
exports.userGet = asynchandler(async (req, res) => {
  res.send("Connected!");
});

//Get ALL posts - render all posts when a user is logged in
exports.postsGet = asynchandler(async (req, res) => {
  const posts = await Message.find({}).populate("user").exec();
  jwt.verify(req.token, process.env.JWTKEY, (err, authData) => {
    if (err) {
      res.json({ status: 403 });
    } else {
      res.json({
        status: 200,
        authData: authData,
        posts: posts,
      });
    }
  });
});
exports.postPost = (req, res) => {
  console.log(req.body);
  jwt.verify(req.token, process.env.JWTKEY, (err, authData) => {
    console.log(authData.user._id);
    if (err) {
      res.json({ status: 403 });
    } else {
      //if the user token is valid

      try {
        const newMess = new Message({
          title: req.body.title,
          message: req.body.message,
          user: authData.user._id,
        });

        const saveMsg = newMess.save();
        res.json({ status: 200, text: "user saved" });
      } catch (err) {
        console.log(err);
      }
    }
  });
};
//Individual User data - this will be used to edit users profiles
exports.userInfo = asynchandler(async (req, res) => {
  res.json({
    info: "User info...",
  });
});
//All comments for a post - this will be moved wo when an individual post is selected
exports.individualPost = asynchandler(async (req, res) => {
  console.log("connected to the route ");

  //this needs to be rendered,
  res.json({
    post: "This will be the post",
    comments: "Blah Blah Blah",
    user: "User...",
  });
});
//Create post -- this will add a post to the database
exports.createPost = asynchandler(async (req, res) => {
  jwt.verify(req.token, process.env.JWTKEY, (err, authData) => {
    if (err) {
      res.json({ status: 403 });
    } else {
      res.json({
        status: 200,
        authData: authData,
      });
    }
  });
});
//User login - will pass token in this request
exports.userLogin = asynchandler(async (req, res) => {
  const liveAccount = await User.findOne({ email: req.body.email });
  if (liveAccount == null) {
    res.send({ data: false });
  }
  //make sure password matches
  else {
    bcrypt.compare(req.body.password, liveAccount.password, (err, result) => {
      if (result) {
        //Sign JWT
        jwt.sign({ user: liveAccount }, process.env.JWTKEY, (err, token) => {
          if (err) {
            console.log(err);
            return res.status(500).send({ data: false });
          } else {
            res.json({
              token: token,
              data: true,
            });
          }
        });
      } else {
        console.log("not a match");
        return res.send({ data: false });
      }
    });
  }
});
//Sign up handler -- new users getting added to the DB
exports.userCreate = asynchandler(async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      fname: req.body.firstName,
      lname: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      canPost: false,
    });

    const save = newUser.save();
    res.json({ stat: "User created" });
  } catch (err) {
    console.log(err);
  }
});
//Submit a comment - post a comment, will just rerender the current page a user is on
exports.submitComment = asynchandler(async (req, res) => {
  res.send("Comment has been submitted!");
});
//Admin remove comment -- Those who have admin access will be able to remove comments
exports.adminRemoveComment = asynchandler(async (req, res) => {
  res.send("Comment removed");
});
//Edit a post -- will be able to edit posts that are currently posted
exports.userPostEdit = asynchandler(async (req, res) => {
  res.send("The post has been edited!");
});
//Like message
exports.likeMessage = asynchandler(async (req, res) => {
  const message = await Message.findOne({ _id: req.params.id });
  jwt.verify(req.token, process.env.JWTKEY, (err, authData) => {
    if (err) {
      res.json({ status: 403 });
    } else {
      message.updateOne({ likes: message.likes + 1 }).exec();

      res.json({
        status: 200,
        authData: authData,
        message: req.params.id,
      });
    }
  });
});

exports.dislikeMessage = asynchandler(async (req, res) => {
  const message = await Message.findOne({ _id: req.params.id });
  console.log(message);
  res.json({
    message: "Disliked",
  });
});
