const mongoose = require("mongoose")

const jobsSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,"Please provide a company name"],
        maxlength:20
    },

    position:{
        type:String,
        required:[true,"Please enter a position name"],
        maxlength:30
    },

    status:{
        type:String,
        enum:["interview","rejected","pending"],
        default:"pending"
    },

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"Please provide a user"]
    }
},{timestamps:true})

module.exports = mongoose.model("Jobs",jobsSchema)