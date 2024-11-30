//importing
const express= require('express');
const empModel = require('./model/employee');
require("./connection")
require("./model/employee")

//intialize
var app= express();
//mid
app.use(express.json());

//api creation
app.post("/add",async(req,res)=>{
    try {
        await empModel(req.body).save()
        res.send("data added")
    } catch (error) {
        console.log(error)
        
    }  
})

app.get("/sub",async(req,res)=>{
try {
    emp= await empModel.find()
    res.send(emp)
} catch (error) {
    console.log(error)
    
}  
})
app.delete("/remove/:id",async(req,res)=>{
    try {
        emp= await empModel.findIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
        
    }  
    })
    app.update("/update/:id",async(req,res)=>{
        try {
            emp= await empModel.findIdAndUpdate(req.params.id,req.body);
            res.send("data updated",data)
        } catch (error) {
            console.log(error)
            
        }  
        })
//port setting
app.listen(6199, ()=>{
    console.log("port is running");
})