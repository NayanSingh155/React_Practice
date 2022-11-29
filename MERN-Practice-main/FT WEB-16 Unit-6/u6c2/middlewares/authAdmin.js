const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
module.exports = async function (req, res, next) {
  try {
    const cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

    if (cookies) {
      const token = cookies[process.env.COOKIE_NAME];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = (await User.findOne({ _id: decoded._id }))

      if (!user) {
        res.status(401).json({ msg: "You are not logged in" });
      } else {
        if (user.role === "admin") {
          req.user = user;
          next();
        } else {
          res.status(401).json({ msg: "You are not authorized to access this page. Sorry." });
        }
      }
    } else {
      res.status(401).json({ msg: "You are not logged in" });
    }
  } catch (err) {
    res.status(401).json({
      msg: "You are not authorized to access this route",
      error: err.message,
    });
  }
};