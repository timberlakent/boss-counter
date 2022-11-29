const { dancerRun } = require("../models");
const db = require("../models");

const vordtIndex = (req, res) =>{
    db.dancerRun.find({}, (error, dancerRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            dancerRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}

const vordtShow = (req,res) =>{
    db.dancerRun.findById(req.params.id, (error, dancerRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            dancerRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}
//create 
const create = (req,res)=>{
    db.dancerRun.create(req.body, (err, createDancerRun)=>{
        if(err) return res.status(404).json({error: err.message});
        return res.status(200).json(createDancerRun);
    })
}


//delete
const destroy = (req,res)=>{
    db.dancerRun.findByIdAndDelete(req.params.id, (error, deletedDancerRun)=>{
        if(!deletedDancerRun)
        return res.status(400).json({error: "Run not found"});
        if(error) return res.status(400).json({error:message});
        return res.status(200).json({
            message: `Run ${deletedDancerRun.name} was deleted`,
        })
    })
}

//update
const update = (req,res)=>{
    db.dancerRun.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true},
        (err, updateDancerRun)=>{
            if(err) return res.status(400).json({error: err.message});
            return res.status(200).json(updateDancerRun);
        }
    )
}

module.exports= {vordtIndex, update, destroy, vordtShow, create}