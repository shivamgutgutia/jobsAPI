const customError = require("../errors/custom-errors")
const { StatusCodes } = require('http-status-codes')
module.exports= (err,req,res,next)=>{
    if(err instanceof customError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(err.statusCode||StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
}