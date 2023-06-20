const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./controllers/router");
require("dotenv").config();

app.use(express.json());

app.use("/", router);

app.get("/api", (req, res) => {
  res.json({ test: true });
});

//mongoose connection
mongoose.set("strictQuery", false);
//DB Connection re-establioshed
const mongoDB = process.env.DB_LINK;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("MongoDB is connected");
}

app.listen(5000, () => console.log("App is listening on port 3000"));
