const { createMed } = require("../controllers/medicine.controller");

const router = require("express").Router();
router.post("/create", createMed);
module.exports = router;