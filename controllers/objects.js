const objects = require("../models/objects")

const getObjects = async(req,res)=>{
    res.status(200).send("Hello World")
}

module.exports = {getObjects}