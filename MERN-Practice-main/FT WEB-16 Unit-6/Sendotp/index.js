const express = require("express");
// const {customAlphabet}=require("nanoid")
// const nanoid=customAlphabet("0123456789",6)
const mongoose = require("mongoose");
const OTP = require("./model");
const conn = mongoose.createConnection("mongodb://localhost:27017/users");
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/signup", (req, res) => {
  const { username, password, name, age,email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const userId = "12346";
  OTP.insertMany([{ otp, userId: userId }]);
  const content = `<div>
<h1>Hello, {{name}}</h1>
<p>How Are you?</p>
<p>Your OTP is {{otp}}</p>
</div>
`;
const template=hbs.compile(content)
transport.sendMail({
    from:"from@example.com",
    to:user.email,
    subject:"Account created",
    html:template({name:name,otp:otp})
    // text:"Hello world how are you?"
})
  res.send("Otp is " + otp);
});
app.listen(8080, async () => {
  console.log("server started on 8080");
});
