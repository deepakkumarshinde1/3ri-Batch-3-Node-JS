require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const IndexRoutes = require("./routes/IndexRoutes");

// enable post/put we nee to methods
app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false })); // body-parser

// add "use"
app.set("view engine", "pug");
app.set("views", "./view");

app.use(express.static("./public"));
app.use("/", IndexRoutes);

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
