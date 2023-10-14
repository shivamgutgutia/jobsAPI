const jwt = require("jsonwebtoken")
const {UnauthenticatedError}= require("../errors/index")

const auth = async (req,res,next)=>{
    const authToken = req.headers.authrization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthenticatedError("Authentication Invalid")
    }
    const token = authToeken.split(" ")[1]
    try{
        const payload= jwt.verify(token,process.env.JWT_SECRET)
        req.user = {userId:payload.userId,userName:payload.userName}
        next()
    }catch(err){
        throw new UnauthenticatedError("Authentication invalid")
    }
}

module.exports = auth