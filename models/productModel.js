const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    imageUrl : [{
        type:String,
    }],
    feature:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:String,
        require:true
    },
    size:[{
        type:Number,
        required:true
    }],
    color:[{
        type:String,
        required:true
    }]    

})


module.exports =new mongoose.model('product',ProductSchema);