const express=require("express");
const connection = require("./db/db");
const crypto=require("crypto")
var session = require('express-session')
const User = require("./models/user,js");
const jwt=require("jsonwebtoken")
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))
app.get("/",(req,res)=>{
    // if (req.session.views) {
    //     req.session.views++
    //     res.setHeader('Content-Type', 'text/html')
    //     res.write('<p>views: ' + req.session.views + '</p>')
    //     res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    //     res.end()
    //   } else {
    //     req.session.views = 1
    //     res.end('welcome to the session demo. refresh!')
    //   }
    return res.cookie("autoken","1234",{httpOnly:true,secure:false}).send("cookies set")
    })

app.post("/signup",async function(req, res){
   const {user_name,password,name}=req.body
    const hash=crypto.pbkdf2Sync(req.body.password,"SECRET1234",60,64,"sha256").toString("hex")
        try{
    const user =await User.create({user_name,password,name,hash});
    return res.status(201).send(user);
        }catch(err){
            return res.status(404).send({err});
        }
    })
  app.get("/profile/:id",async function(req, res){
    const user =await User.findById(req.params.id);
    const token=req.headers["authorization"]?.split(" ")
        try{
          const decoded=jwt.verify(token,"SECRET1234")
          if(decoded){
            return res.send(user)
          }
           
        }catch(err){
            return res.status(404).send({err});
        }
    })
    app.post("/signin",async(req,res)=>{
        const {user_name,password}=req.body;
        const user=await User.findOne({user_name});
        const token=jwt.sign({name:user?.name,user_name:user?.user_name},"SECRET1234",{expiresIn:"6d"})
        res.send({message:"Sign in success",token})
        
    })
app.listen(8080,async()=>{
    try{
        await connection;
        console.log("server started on 8080")
    }
   catch(err){
    console.log(err)
   }
console.log("server started on 8080")
})