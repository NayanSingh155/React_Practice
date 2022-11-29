const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "admin","instructor"], default: "student" },
    verified: { type: Boolean, default: false },
    phone: String,
    age: { type: String, required: true },
    loginRequired: Boolean
  }
);


userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 12, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.generateToken = function () {
  try {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    return token;
  } catch (err) {
    console.log(err.message);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;