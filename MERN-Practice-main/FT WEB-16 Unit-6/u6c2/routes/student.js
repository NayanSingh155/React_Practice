const express = require("express");
const {
  login,
sendResponseIfLoggedIn,
  logout,
} = require("../controllers/student.controller");

const checkLogin = require("../middlewares/login");
const router = express.Router();
router.post("/login", login);
router.get("/profile", checkLogin, sendResponseIfLoggedIn);
router.get("/logout", logout);
module.exports = router;
