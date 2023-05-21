const express = require("express");
const {
  home,
  addUserView,
  saveNewUser,
  makeLogin,
} = require("../controller/MainController");
const { verifyToken, checkUserToken } = require("./jwt");
const {
  userHomeView,
  getUserData,
  removeUser,
} = require("../controller/UserController");

const router = express.Router();

router.get("/", home);
router.get("/registered-user", addUserView);
router.get("/dashboard", userHomeView);

// post type
router.post("/save-new-user", saveNewUser);
router.post("/make-login", makeLogin);
router.post("/verify-token", verifyToken);
router.post("/get-user-details", checkUserToken, getUserData);

// delete type
router.post("/remove-user", checkUserToken, removeUser);

module.exports = router;

// jwt (multi server instance) (mobile | react | angular | desktop)
// session (one server instance) (web application)
// cache session (one server instance) (radis)
