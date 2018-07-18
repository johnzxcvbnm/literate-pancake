
const express = require("express");
const Book = require("../models/books.js");
const books = express.Router();

books.get("/", (req, res) => {
  Book.find({}).sort( { name: 1 } ).exec( (err, foundBooks) => {
    res.json(foundBooks);
  });
});

// books.post("/", (req, res) => {
//   Book.create( req.body, (err, createdBook) => {
//     res.json(createdBook);
//   });
// });

books.post("/", (req, res) => {
  Book.create( req.body, (err, createdBook) => {
    res.json(createdBook);
  });
});


module.exports = books;

