require('dotenv').config()// подлючаем переменные окружения
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const {request} = require("express");




function testMiddleware(req, res, next) {
    console.log('iddleware')
    next();
}



const app = express();
app.use(cors());
app.use(bodyParser.json());


//post
app.get('/test', testMiddleware, (req, res)=>{
    res.json({
        str:process.env.API_KEY,
    })
})


app.listen(3030,()=>console.log('Ok'))
