const Jobs = require("../models/jobs")
const statusCodes = require("http-status-codes")
const {NotFoundError,BadRequestError}=require("../errors/index")

const getJobs = async(req,res)=>{
    const jobs = await Jobs.find({createdBy:req.user.userId}).sort("-createdAt")
    res.status(statusCodes.OK).json(jobs)
}

const getJob = async(req,res)=>{
    const job = await Jobs.findOne({_id:req.params.id,createdBy:req.user.userId})
    if(!job){
        throw new NotFoundError("No job with the given id")
    }
    res.status(statusCodes.OK).json(job)
}
const createJob = async(req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Jobs.create(req.body)
    res.status(statusCodes.CREATED).json({job})
}
const updateJob = async(req,res)=>{
    const job = await Jobs.findOneAndUpdate({_id:req.params.id,createdBy:req.user.userId},{$set:req.body},{new:true,runValidators:true})
    if(!job){
        throw new NotFoundError("No job with the given ID")
    }
    res.status(statusCodes.OK).json({job})
}
const deleteJob = async(req,res)=>{
    const job = await Jobs.findOneAndDelete({_id:req.params.id,createdBy:req.user.userId})
    if(!job){
        throw new NotFoundError("No job with the given ID")
    }
    res.status(statusCodes.OK).json({job})
}

module.exports = {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}