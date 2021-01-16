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

// router.delete("/api/burgers/:id", function (req, res) {
//   burger.delete(
//     ["id"],
//     [req.body.id, req.body.devoured === "true"],

//     function (data) {
//       console.log("this is my console log", data);
//       res.json({ id: data.insertId });
//       // res.json({ id: result.insertId });
//     }
//   );
// });

module.exports = router;
