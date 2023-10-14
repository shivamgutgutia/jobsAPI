const bcryptjs = require("bcryptjs")
const Users = require("../models/users")
const statusCodes = require("http-status-codes")
const login = async (req,res)=>{
    res.end("Login")
}

const register = async (req,res)=>{
    console.log(req.body)
    const {name,email,password} = req.body
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)
    console.log(hashedPassword)
    const newUser={name,email,password:hashedPassword}
    const user = await Users.create({...newUser})
    res.status(201).json({newUser})

}

module.exports = {login,register}