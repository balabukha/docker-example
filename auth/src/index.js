const express = require("express");
const mongoose = require("mongoose");
const { connectDb } = require("./helpers/db");
const app = express();
const { port, host } = require("./configuration");

const postSchema = new mongoose.Schema({
  name: String
});

const Post = mongoose.model("Post", postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`STARTED AUTH working correct on port: ${port}`);
    console.log(`STARTED HOST ${host}`);
  });
};

app.get("/test", (req, res) => {
  res.send("API WORKS!");
});

app.get("/api/current-user", (req, res) => {
  res.json({
    id: "1234",
    email: "foo@foo.com"
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .on("open", startServer);
