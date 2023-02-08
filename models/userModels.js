const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    // dob:{
    //     type:Date,
    //     default:Date.now()
    // },
    contry:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    check:{
        type:Boolean,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})


module.exports = new mongoose.model('User',UserSchema);