const { apiHome, getUsers } = require("../controller/APIController");

let apiRouter = require("express").Router();

apiRouter.get("/", apiHome);
apiRouter.get("/get-users", getUsers);

module.exports = apiRouter;
