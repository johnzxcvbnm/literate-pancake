//Dependancies
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
// const session = require("express-session");

//Sessions

//Middleware
app.use(express.json());
app.use(express.static("public"));

//Controllers
const bookController = require("./controllers/books.js");
app.use("/books", bookController);

//Listening Routes
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Mongoose Connection
mongoose.connect("mongodb://localhost:27017/BookCat", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!");
});
