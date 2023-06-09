const express = require("express")
const router = express.Router()
const controller = require("./index")


router.get("/", controller.userGet)

module.exports = router