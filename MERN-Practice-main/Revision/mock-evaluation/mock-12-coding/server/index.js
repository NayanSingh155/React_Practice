const express = require("express");
const connection = require("./config/db");
const http = require("http");
require("dotenv").config();
const linkRouter = require("./routes/link.route");
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.set('view engine','ejs');
app.use("/", linkRouter);
app.get("/", async (req, res) => {
  res.render("Welcome");
});
server.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server started on ${process.env.PORT}`);
});
