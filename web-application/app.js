const express = require("express");
const app = express();
const IndexRoutes = require("./routes/IndexRoutes");
const PORT = 3002;

// add "use"
app.set("view engine", "pug");
app.set("views", "./view");

app.use(express.static("./public"));

app.use("/", IndexRoutes);
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
