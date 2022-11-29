const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(404).json({ error: "Need to Looged In" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(404).json({ error: "Need to Looged In" });
    }
    const { _id } = payload;
    User.findById(_id).then((data) => {
      req.user = data;
      next();
    });
  });
};
