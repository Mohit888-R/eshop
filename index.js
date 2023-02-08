const { config } = require("dotenv");
const express = require("express");
const app = express();
const mongodb = require("mongodb");
const {connect}= require('./config/db');
const authRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

require('dotenv').config();

const port = process.env.PORT;

connect();
app.use(express.json())
app.use('/api/v1/user',authRouter);
app.use('/api/v1/product',productRouter);

app.get("/",(req,res)=>{
    res.send("This is Nike Clone Backend");
})




app.listen(port,()=>{
    console.log(`the app listening on http://localhost:${port} port...`)
})


