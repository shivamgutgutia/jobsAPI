const mongoose = require("mongoose")

const objectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter a valid name"]
    },

    featured:{
        type:Boolean,
        default: false
    },

    date:{
        type:Date,
        default:Date.now()
    },

    company:{
        type:String,
        enum:["a","b"]
    }

})

module.exports = mongoose.model("Objects",objectSchema)