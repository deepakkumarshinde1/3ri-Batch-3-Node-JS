const express = require("express");
const { home, about, userList, getUserList } = require("../controller/MainController");
const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/user-list/:page", userList);
router.get('/list',getUserList)

module.exports = router;
