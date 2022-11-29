const express = require("express");
const env = require("dotenv");
const connection = require("./db");
const cors = require("cors");
const app=express();
app.use(cors());
const adminRouter=require("./routes/admin")
const studentRouter=require("./routes/student")
const instructorRouter=require("./routes/instructor")
const authAdmin = require("./middlewares/authAdmin");
env.config({path:"./config.env"});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("admin",adminRouter,authAdmin)
app.use("student",studentRouter)
app.use("instructor",instructorRouter)

app.listen(process.env.PORT,(req, res) => {
    try {
      connection();
    } catch (error) {
      console.log(error);
    }
    console.log(`Successfully started at PORT ${process.env.PORT}`);
  });