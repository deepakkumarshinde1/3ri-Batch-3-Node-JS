require("dotenv").config();
var createError = require("http-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const IndexRoutes = require("./routes/IndexRoutes");
const apiRouter = require("./routes/apiRoutes");

// enable post/put we nee to methods
app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false })); // body-parser

// add "use"
app.set("view engine", "pug");
app.set("views", "./view");

app.use(express.static("./public"));
app.use("/", IndexRoutes);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    code: err.status || 500,
    status: false,
  });
});

// connection

// complete connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
