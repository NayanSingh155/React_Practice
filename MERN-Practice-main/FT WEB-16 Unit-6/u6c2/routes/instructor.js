const express = require("express");
const {
  login,
sendResponseIfLoggedIn,
getOneStudentOrInstructor,
  logout,
} = require("../controllers/instructor.controller");

const checkLogin = require("../middlewares/login");
const router = express.Router();
router.post("/login", login);
router.get("/profile", checkLogin, sendResponseIfLoggedIn);
router.get("/student/:id",getOneStudentOrInstructor)
router.get("/logout", logout);
module.exports = router;
