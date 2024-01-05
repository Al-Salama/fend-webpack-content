const path = require("path");
const webpack = require("webpack");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

module.exports = {};

const app = express();

app.use(
  express.static("dist", {
    index: "index.html",
  })
);

console.log(__dirname);

/* app.get("/", function (req, res) {
  res.sendFile("/client/views/index.html", { root: __dirname + "/.." });
}); */

// designates what port the app will listen to for incoming requests
const PORT = 1506;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
