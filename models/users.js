const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter a name"],
        minlength:3,
        maxlength:20
    },

    email:{
        type:String,
        reuired:[true,"Enter an email"],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Enter a valid email"
        ],
        unique:true
    },

    password:{
        type:String,
        required:[true,"Enter a password"],
    }
})

module.exports= mongoose.model("User",userSchema)