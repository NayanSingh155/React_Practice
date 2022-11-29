const express = require("express");

const currencies = require("currencies.json");
const cors = require("cors");
const socket = require("socket.io");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});

const server = app.listen(8080, (req, res) => {
  console.log(`Server is started`);
});

const wss = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

let data = currencies.currencies;

wss.on("connection", (ws) => {
  ws.emit("data", data);
  let i = 0;
  setInterval(() => {
    ws.emit("operation", data[i++ % data.length]);
  }, 2000);
});
