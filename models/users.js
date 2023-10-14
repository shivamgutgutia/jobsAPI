const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

userSchema.pre("save",async function(next){
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password,salt)
})

userSchema.methods.createJWT = async function(){
    return jwt.sign({userId:this._id,userName:this.name},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}


userSchema.methods.verifyPassword = async function(pwd){
    return await bcryptjs.compare(pwd,this.password)
}
module.exports= mongoose.model("User",userSchema)