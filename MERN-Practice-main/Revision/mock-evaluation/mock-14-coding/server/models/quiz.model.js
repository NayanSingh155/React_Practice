const mongoose = require("mongoose");
const QuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  correct_answer: { type: String ,required:true},
  incorrect_answers:[{type:String}],
  difficulty: { type: String, required: true,enum:["easy","medium","hard"] },
  category:{type:String,required:true}
});
const Quiz = new mongoose.model("quiz", QuizSchema);
module.exports = Quiz;