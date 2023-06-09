const express = require("express")
const router = express.Router()
const controller = require("./index")


router.get("/", controller.userGet)

router.get('/allposts', controller.postsGet)

router.get('/user/:id', controller.userInfo)

module.exports = router