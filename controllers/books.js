const mongoose = require("mongoose");

//Schema Breakdown
//Name: is the name of the book.  All names should be different (unique)
//Author: is who wrote the actual book
//Description: is a short description of the book
//AddedBy: is who added the book to the database (the user).  This should be done automatically when the book is added to the database.

const bookSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  author: String,
  description: String,
  addedBy: String
});

module.exports = mongoose.model("Books", bookSchema);
