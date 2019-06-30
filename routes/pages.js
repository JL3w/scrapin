const express = require("express");
const app = express();
var path = require('path');


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/saved", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/saved.html"));
});

module.exports = app;

