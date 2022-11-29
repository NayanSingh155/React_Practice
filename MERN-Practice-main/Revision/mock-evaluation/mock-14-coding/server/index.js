const express = require("express");
const http = require("http");
require("dotenv").config();
const cors = require("cors");
const connection = require("./config/db");
const app = express();
const server = http.createServer(app);
const quizRouter=require("./routes/quiz.route")
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/quiz",quizRouter)
server.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server started on ${process.env.PORT}`);
});