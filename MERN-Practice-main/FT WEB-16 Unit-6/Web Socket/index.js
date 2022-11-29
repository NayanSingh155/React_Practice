const {WebSocketServer}=require("ws")
const wss=new WebSocketServer({port:3000,host:"localhost"})
wss.on("listening",()=>{
    console.log("listening on socket server")
})
wss.on("connection",(socket)=>{
    // console.log("Got new connection",con)
    socket.send("welcome user")
    socket.on("message",(msg)=>{
        // console.log("msg sent",msg.toString("utf-8"))
        socket.send("hello server")
    })
    socket.on("message",(msg)=>{
        console.log("client said",msg.toString("utf-8"))
    })
})