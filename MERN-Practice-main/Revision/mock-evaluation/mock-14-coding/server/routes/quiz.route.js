const router = require("express").Router();
const { createQuiz, getFilteredQuiz } = require("../controllers/quiz.controller");
const Quiz = require("../models/quiz.model");
router.post("/",createQuiz)
router.get("/",async(req,res)=>{
    const r=await Quiz.find()
    res.json(r)
})
router.get("/filter",getFilteredQuiz)

module.exports=router;