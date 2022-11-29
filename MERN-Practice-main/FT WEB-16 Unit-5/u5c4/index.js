const express = require("express");
const {New,connection} = require("./db");
const PORT=process.env.PORT || 8080
const newsRouter=require("./route")
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/news",newsRouter)
app.listen(PORT,async ()=>{
    try {
        await connection;
        console.log("Connected to db");
    } catch {
        console.log("Failed to connect")
    }
    console.log("Server started at port 8080")
})