const {Router}=require('express')
const newsRouter=Router()
const {New}=require("./db")
newsRouter.get("/",(req,res)=>{
    res.end("news")
})
newsRouter.get("/get",async(req,res)=>{
    const {q,location,author,tag,pageSize,pageNo}=req.query
    // res.end(q)
   if(q){
    const data = await New.find({ Title: { $regex: q } });
    res.json(data)
   }
   if(location){
    const data = await New.find({ Location: location  });
    res.json(data)
   }
   if(author){
    const data = await New.find({ Author: author  });
    res.json(data)
   }
   if(tag){
    const data = await New.find({ tags: tag  });
    res.json(data)
   }
   if(pageSize && pageNo){
    const show = pageSize*(pageNo-1);
    const data = await New.find().skip(show).limit(pageSize);
             return res.json(data);
   }
})
newsRouter.post("/new",(req,res)=>{
    const news = new New(req.body);
    news.save((err,news)=>{
        try {
            console.log("data added")
            res.json(news);
        } catch {
            res.send(err);
        }
    })
})


module.exports=newsRouter
