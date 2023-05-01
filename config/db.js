const mongoose  = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;

const connect = ()=>{
    mongoose.set("strictQuery", false);
    console.log("mongodb connection connected!");
    return mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true});
}

module.exports = {
    connect
}