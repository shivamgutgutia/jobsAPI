const bcryptjs = require("bcryptjs")
const Users = require("../models/users")
const statusCodes = require("http-status-codes")
const {BadRequestError,UnauthenticatedError,NotFoundError} = require("../errors/index")

const login = async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        throw new BadRequestError
    }
    const user = await Users.findOne({email})
    if(!user){
        throw new NotFoundError
    }
    if(!await user.verifyPassword(password)){
        throw new UnauthenticatedError
    }
    const token = user.createJWT()
    res.status(statusCodes.OK).json({user:{name:user.name,id:user._id},token})
}

const register = async (req,res)=>{
    const user = await Users.create({...req.body})
    const token = await user.createJWT()
    res.status(statusCodes.CREATED).json({user:{name:user.name,id:user._id},token})
}

module.exports = {login,register}