//Dependancies
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const session = require("express-session");

//Sessions
app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

//Middleware
app.use(express.json());
app.use(express.static("public"));

//Get Routes
//Route checks to see if the user is logged in
//If the user is logged in, send the user from the current session as a response
//If the user is NOT logged in, send an error message
app.get("/log", (req, res) => {
  if(req.session.currentUser){
    res.json(req.session.currentUser);
  } else {
    res.status(401).json({
      status: 401,
      message: "Not logged in"
    });
  }
});

//Controllers
const bookController = require("./controllers/books.js");
app.use("/books", bookController);

const userController = require("./controllers/users.js");
app.use("/users", userController);

const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

//Listening Routes
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Mongoose Connection
mongoose.connect("mongodb://localhost:27017/BookCat", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log("Connected to mongoose!");
});
