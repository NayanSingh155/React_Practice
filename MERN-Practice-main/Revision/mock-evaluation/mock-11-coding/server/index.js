// BBgjpfrxAjED9H1J
const express = require("express");
const http = require("http");
const { connection } = require("./config/db");
const doctorRouter=require("./routes/doctor.route")
const patientRouter=require("./routes/patient.route")
const medicineRouter=require("./routes/medicine.route")
const authRouter=require("./middlewares/auth")
require("dotenv").config();
// console.log(process.env)
const cors = require("cors");
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use("/auth",doctorRouter)
app.use("/patients",authRouter,patientRouter)
app.use("/med",authRouter,medicineRouter)

app.get("/", (req, res) => {
  res.send("Welcome");
});
server.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server started on ${process.env.PORT}`);
});