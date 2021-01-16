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

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured === "true"],

    function (data) {
      console.log("this is my console log", data);
      res.json({ id: data.insertId });
    }
  );
});

//update the selected burger to devoured = true
router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  console.log(req.params);
  burger.update(
    {
      devoured: true,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
