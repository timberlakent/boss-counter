const { vordtRun } = require("../models");
const db = require("../models");

const vordtIndex = (req, res) =>{
    db.vordtRun.find({}, (error, vordtRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            vordtRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}

const vordtShow = (req,res) =>{
    db.vordtRun.findById(req.params.id, (error, vordtRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            vordtRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}
//create 
const create = (req,res)=>{
    db.vordtRun.create(req.body, (err, createVordtRun)=>{
        if(err) return res.status(404).json({error: err.message});
        return res.status(200).json(createVordtRun);
    })
}


//delete
const destroy = (req,res)=>{
    db.vordtRun.findByIdAndDelete(req.params.id, (error, deletedVordtRun)=>{
        if(!deletedVordtRun)
        return res.status(400).json({error: "Run not found"});
        if(error) return res.status(400).json({error:message});
        return res.status(200).json({
            message: `Run ${deletedVordtRun.name} was deleted`,
        })
    })
}

//update
const update = (req,res)=>{
    db.vordtRun.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true},
        (err, updateVordtRun)=>{
            if(err) return res.status(400).json({error: err.message});
            return res.status(200).json(updateVordtRun);
        }
    )
}

module.exports= {vordtIndex, update, destroy, vordtShow, create}