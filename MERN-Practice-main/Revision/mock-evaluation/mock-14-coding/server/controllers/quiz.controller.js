const express = require("express");
const Quiz = require("../models/quiz.model");

module.exports.createQuiz = async (req, res, next) => {
  const q = new Quiz(req.body);
  q.save().then((r) => {
    return res.json(q);
  });
};
module.exports.getFilteredQuiz = async (req, res, next) => {
  const { difficulty, category, num } = req.query;
  let quiz = await Quiz.find({
    $and: [ { difficulty }, { category }],
  }).limit(num);
  if (quiz) {
    return res.json(quiz);
  } else {
    return res.json("quiz not found");
  }
};