//jshint esversion:6

const express = require('express');

const app = express();

app.use(express.static("Public"));

app.get('/', function(req,res) {
  res.sendFile( __dirname+ "/index.html");
});







app.listen('3000', function() {
  console.log("server started at port 3000:");
});
