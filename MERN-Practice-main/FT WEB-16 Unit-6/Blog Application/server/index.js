const express=require("express")
const connection =require("./config/db");
const cors = require("cors");
const { default: axios } = require("axios");
const blogRouter=require('./controllers/blog.controller')
const session = require("express-session");
const userRouter = require("./controllers/user.controller");
const categoryRouter = require("./controllers/category.controller");
const likeRouter = require("./controllers/like.controller");
const commentRouter = require("./controllers/comment.controller");
let app=express()
const CLIENT_ID = "3524866ca5bd6fa581d8";
const CLIENT_SECERET = "12addc1382dd65f8c7819f928348a56fff84c51e";
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    session({secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
   })
  );
// const PORT=process.env.PORT || 8080;
app.use("/blogs",blogRouter)
app.use("/users",userRouter)
app.use("/category",categoryRouter)
app.use("/like",likeRouter)
app.use("/comment",commentRouter)
app.get("/",(req,res)=>{
    res.end("login")
})




app.listen(8080,async()=>{
    try{
        await connection;
        console.log("server started on 8080")
    }
   catch(err){
    console.log(err)
   }
})