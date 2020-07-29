const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { connectDb } = require("./helpers/db");
const app = express();
const { port, host, authApiUrl } = require("./configuration");

const postSchema = new mongoose.Schema({
  name: String
});

const Post = mongoose.model("Post", postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`STARTED API on port: ${port}`);
    console.log(`STARTED HOST ${host}`);
  });
};

app.get("/test", (req, res) => {
  res.send("API WORKS!");
});

app.get("/api/test-api-data", (req, res) => {
  res.json({
    testWithApi: true
  });
});

app.get("/test-with-current-user", (req, res) => {
  axios.get(authApiUrl + "/current-user").then(response => {
    res.json({
      testWithCurrentUser: true,
      currentUserFromAuth: response.data
    });
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .on("open", startServer);
