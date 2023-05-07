const express = require("express");
// const UserRouter = require("./routes/UserRoute");

import UserRouter from "./routes/UserRoute";

const app = express(); // return  a object i.e server object
const PORT = 3333;

// inject external routes to app server => app.use()
// app.use() ==> middleware

app.use("/", UserRouter); // added a routing
// app.use('/student',StudentRouting);
// app.use('/teacher',Routing);
// "/" => pre
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
