const express = require("express");
let app = express();
const http=require("http");
const {Server}=require("socket.io")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const httpServer=http.createServer(app)
const wss=new Server(httpServer)
const history=[]
wss.on("connection",(ws)=>{
    // console.log("Got new connection")
    ws.emit("history",history)
    ws.broadcast.emit("newuser")
    ws.on("newmessage",(msg)=>{
        // console.log("message received",msg)
        history.push(msg)
        wss.emit("newmessage",msg)
    })
})
app.get("/", (req, res) => {
  res.  sendFile(__dirname+"/public/index.html")
//   app.use("/",express.static("public"))
});

httpServer.listen(8080, async () => {
  console.log("server started on 8080");
});
