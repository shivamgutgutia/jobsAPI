const bcryptjs = require("bcryptjs")
const Users = require("../models/users")
const statusCodes = require("http-status-codes")
const login = async (req,res)=>{
    res.end("Login")
}

const register = async (req,res)=>{
    const user = await Users.create({...req.body})
    res.status(statusCodes.CREATED).json({user})
}

module.exports = {login,register}