const express = require("express");
const {
  getStudents,
  getInstructors,
  getOneStudentOrInstructor,
  deleteStudentById,
  createUser,
} = require("../controllers/admin.controller");

const router = express.Router();
router.get("/students", getStudents);
router.get("instructors",getInstructors)
router.post("create",createUser)
router.get("/instructor/:id",getOneStudentOrInstructor)
router.get("/student/:id",getOneStudentOrInstructor)
router.delete("/student/:id",deleteStudentById)

module.exports = router;
