const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.send("connected router")
})

module.exports = router