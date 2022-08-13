const express=require("express")
const activityModel=require("../model/activity")


const route=express.Router()

route.get("/show",(req,res)=>{
    activityModel.find({username:req.headers.username}).then((data)=>{
        res.status(200).send(data)
    })
})

route.post("/create",(req,res)=>{
    activityModel.create({username:req.body.username,activity:req.body.activity}).then(()=>{
        res.status(200).send("success")
    })
})

route.patch("/update",(req,res)=>{
    
})

module.exports=route