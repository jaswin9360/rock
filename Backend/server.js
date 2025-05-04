const express = require('express');
const  route  = require('./route/routes');
const users= require("./mongoose")
const cors = require("cors")
const app = express();

users()

app.use(express.json())
app.use(cors())

app.use("/",route)



app.listen(3009,()=>{
    console.log("server running on 3009")
});

