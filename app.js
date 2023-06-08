const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.get("/", (req,res) => {
    res.send("Connected")
})



//mongoose connection 
mongoose.set("strictQuery", false)
const mongoDB = "mongodb+srv://jkorobellis:JakeKoro@blog-app.3rchsel.mongodb.net/?retryWrites=true&w=majority"

main().catch((err) => console.log(err))
async function main(){
    await mongoose.connect(mongoDB)
    console.log("MongoDB is connected")
}

app.listen(3000, () => console.log("App is listening on port 3000"))