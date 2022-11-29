const User = require("../models/user.model");
const bcrypt = require("bcrypt");
module.exports = {
  login: async function (req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOneAndUpdate(
        { email },
        { loginRequired: false }
      );

      if (user) {
        const passwordMatched = await bcrypt.compare(password, user.password);

        if (passwordMatched) {
          const authToken = await user.generateToken();

          res.cookie(process.env.COOKIE_NAME, authToken, {
            httpOnly: true,
          });

          res.status(201).json({ user, token: authToken });
        } else {
          res.status(400).json({ msg: "Invalid credentials" });
        }
      } else {
        res.status(404).json({ msg: "Your email doesn't exists" });
      }
    } catch (err) {
      next(err);
    }
  },

  getOneStudentOrInstructor: async function (req, res, next) {
    try {
      const users = await User.findById(req.params.id);
      res.status(200).json({ users });
    } catch (err) {
      next(err);
    }
  },

  sendResponseIfLoggedIn: function (req, res) {
    res.status(201).send(req.user);
  },

  logout: function (_req, res) {
    res.clearCookie(process.env.COOKIE_NAME);
    res.status(201).json({ msg: "Logged out" });
  },
};
