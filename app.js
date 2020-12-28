//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));





app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/about", function(req, res) {
  res.render("about")
});

app.get("/servies", function(req, res) {
  res.render("services")
});

app.get("/shoes", function(req, res) {
  res.render("shoes")
});

app.get("/apperal", function(req, res) {
  res.render("apperal")
});

app.get("/accessories", function(req, res) {
  res.render("accessories")
});




app.listen(process.env.PORT  || 3000, function() {
  console.log("We good jit");
});
