//Dependancies
const express = require("express");
const Book = require("../models/books.js");
const router = express.Router();

//Get Routes
//Default Route automatically pulls everything and sorts it by name
router.get("/", (req, res) => {
  Book.find({}).sort( { name: 1 } ).exec( (err, foundBooks) => {
    res.json(foundBooks);
  });
});

//Post Route
router.post("/", (req, res) => {
  Book.create( req.body, (err, createdBook) => {
    res.json(createdBook);
  });
});

//Delete Route
router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove( req.params.id, (err, removedBook) => {
    res.json(removedBook);
  });
});

//Put Route
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate( req.params.id, req.body, { new: true }, (err, updatedBook) => {
    res.json(updatedBook);
  });
});

module.exports = router;
