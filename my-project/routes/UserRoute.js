// extract routing form express app

// #1
// import React form 'react';// es6
const express = require("express");
const UserRouter = express.Router();

// #2
// const UserRouter = require("express").Router();

// #3
// const { Router } = require("express");
// const UserRouter = express.Router();

// routing http
// GET , POST , PUT, DELETE
UserRouter.get("/", (request, response) => {
  response.send("Welcome to express ");
}); // (path,requestHandler)

UserRouter.get("/about", (request, response) => {
  response.send("Welcome to express about page");
}); // (path,requestHandler

module.exports = UserRouter;
