const { userRun } = require("../models");
const db = require("../models");

const index = (req, res) =>{
    db.userRun.find({}, (error, userRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            userRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}

const show = (req,res) =>{
    db.userRun.findById(req.params.id, (error, userRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            userRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}

const create = (req,res)=>{
    db.userRun.create(req.body, (err, createUserRun)=>{
        if(err) return res.status(404).json({error: err.message});
        return res.status(200).json(createUserRun);
    })
}

module.exports= {index,  show, create};