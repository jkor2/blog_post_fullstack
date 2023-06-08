const express = require("express")
const mongoose = require("mongoose")
const app = express()
const router = require("./controllers/index")



app.use("/", router)



//mongoose connection 
mongoose.set("strictQuery", false)
const mongoDB = "mongodb+srv://jkorobellis:JakeKoro@blog-app.3rchsel.mongodb.net/blog-app?retryWrites=true&w=majority"

main().catch((err) => console.log(err))
async function main(){
    await mongoose.connect(mongoDB)
    console.log("MongoDB is connected")
}

app.listen(3000, () => console.log("App is listening on port 3000"))