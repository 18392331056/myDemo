const express = require("express")
const path = require("path")
const fs = require("fs")




var app = express()

app.use(express.static("../index"));

app.get("/index",(req,res)=>{

 res.json(
     {
       name :"zhangsanfeng",
       age:25 
     }
 )

})

app.listen(3000,(req,res)=>{
    console.log("3000 port listen success")
})

