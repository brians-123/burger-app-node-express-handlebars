//import express
const express = require("express");

//create the `router` for the app, and export
//the `router` at the end of the file.
const router = express.Router();

//import burger
const burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
