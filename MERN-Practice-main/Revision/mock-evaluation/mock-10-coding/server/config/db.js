const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected to db"))
  .catch(() => console.log("error"));
module.exports = connection;