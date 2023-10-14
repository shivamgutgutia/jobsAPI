const Jobs = require("../models/jobs")
const statusCodes = require("http-status-codes")

const getJobs = async(req,res)=>{
    const jobs = await Jobs.find({createdBy:req.user.userId}).sort("-createdAt")
    res.status(statusCodes.OK).json(jobs)
}

const getJob = async(req,res)=>{
    res.end("Get a jobs")
}
const createJob = async(req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Jobs.create(req.body)
    res.status(statusCodes.CREATED).json({job})
}
const updateJob = async(req,res)=>{
    res.end("Job Updated")
}
const deleteJob = async(req,res)=>{
    res.end("Job deleted")
}

module.exports = {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}