const {
  apiHome,
  getUsers,
  addUser,
  removeUser,
} = require("../controller/APIController");
const validate = require("./validator/customerValidate");

let apiRouter = require("express").Router();

apiRouter.get("/", apiHome);
apiRouter.get("/get-users", getUsers);
//
apiRouter.post("/add-user", validate.addUser, addUser);

//
apiRouter.delete("/remove-user", removeUser);

module.exports = apiRouter;
