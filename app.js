const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.get("/", (req,res) => {
    res.send("Connected")
})



//mongoose connection 



app.listen(3000, () => console.log("App is listening on port 3000"))