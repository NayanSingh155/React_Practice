const { createPatient, getPatients, updatePatient, deletePatient, getPatient, genderMale, genderFemale, highToLow, lowToHigh } = require("../controllers/patient.controller");
const router = require("express").Router();
router.put("/update/:id",updatePatient)
router.delete("/delete/:id",deletePatient)
router.post("/create", createPatient);

router.get("/male",genderMale)
router.get("/female",genderFemale)
router.get("/ageh2l",highToLow)
router.get("/agel2h",lowToHigh)

router.get("/", getPatients);
router.get("/:id",getPatient)


module.exports = router;