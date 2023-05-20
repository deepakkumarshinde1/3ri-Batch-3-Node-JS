const express = require("express");
const {
  home,
  addUserView,
  saveNewUser,
  makeLogin,
} = require("../controller/MainController");
const { verifyToken } = require("./jwt");

const router = express.Router();

router.get("/", home);
router.get("/registered-user", addUserView);

// post type
router.post("/save-new-user", saveNewUser);
router.post("/make-login", makeLogin);

router.post("/verify-token", verifyToken);

// delete type

module.exports = router;

// jwt (multi server instance) (mobile | react | angular | desktop)
// session (one server instance) (web application)
// cache session (one server instance) (radis)
