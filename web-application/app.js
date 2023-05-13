const express = require("express");
const app = express();
const mongoose = require("mongoose");
const IndexRoutes = require("./routes/IndexRoutes");
const PORT = 3002;

// enable post/put we nee to methods
app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false })); // body-parser

// add "use"
app.set("view engine", "pug");
app.set("views", "./view");

app.use(express.static("./public"));
app.use("/", IndexRoutes);

// connection
const MONGODB_URI = "mongodb://127.0.0.1:27017/3ri_batch1";
// complete connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
