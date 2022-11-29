const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  try {
    const cookies =
      Object.keys(req.signedCookies).length > 0
        ? req.signedCookies
        : req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (cookies) {
      const token = typeof cookies === "object" ? cookies[process.env.COOKIE_NAME] : cookies;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ _id: decoded._id })
     

        if (!user) {
          res.status(401).json({ msg: "You are not logged in" });
        } else {
          req.user = user;
          next();
        }
      }
   
  } catch (err) {
    res.status(401).json({
      msg: "You are not logged in",
      error: err.message,
    });
  }
};