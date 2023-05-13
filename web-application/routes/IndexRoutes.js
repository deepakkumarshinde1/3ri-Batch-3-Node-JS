const express = require("express");
const {
  home,
  addUserView,
  saveNewUser,
} = require("../controller/MainController");
const router = express.Router();

router.get("/", home);
router.get("/registered-user", addUserView);

// post type
router.post("/save-new-user", saveNewUser);

module.exports = router;
