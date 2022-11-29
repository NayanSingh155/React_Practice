const { login, signup } = require("../controllers/doctor.cotroller");
const Doctor = require("../models/doctor.model");
const router = require("express").Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/",async(req,res)=>{
   const u=await Doctor.find()
   res.json(u)
})
module.exports = router;