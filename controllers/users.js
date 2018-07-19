//Dependancies
const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const bcrypt = require("bcrypt");

//Create a new user
router.post("/", (req, res) => {
  //Encrypt the users password
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    res.status(201).json({
      status: 201,
      message: "User Created"
    });
  });
});

//Export the routes to the users controller
module.exports = router;
