const express=require('express');
const cors=require('cors');
const nodemon = require('nodemon');
const { json } = require('body-parser');
const app=express();
require(nodemon).config();

app.use(json())

PORT=6969;

app.get("/",(req,res)=>{
    res.send("Selvadhanush")
})
app.post("/",(req,res)=>{
    const  {Username,Email,Password,Date_of_birth}=req.body;
    if (!Username){
        res.status(400).send({msg:"Username cannot be empty"})
    }else if (!Email){
        res.status(400).send({msg:"Email cannot be empty"});
    }const size=Password.length();
     else if  (size>8 || size<=16 ){
        res.status(400).send({msg:"password is invalid"})
     }else{
        res.status(200).send({msg:sucess})
     }
})

app.listen(PORT,()=>{
    res.send(`The port is connected ${PORT}`)
})
app.listen();