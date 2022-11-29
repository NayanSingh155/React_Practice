const { model, Schema, now } = require("mongoose");
const OTPSchema = new Schema({
  userId:String,
  otp:Strinhg
});

module.exports = model("OTP", OTPSchema);
