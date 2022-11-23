const { userRun } = require("../models");
const db = require("../models");
//index
const index = (req, res) =>{
    db.userRun.find({}, (error, userRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            userRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}
//show
const show = (req,res) =>{
    db.userRun.findById(req.params.id, (error, userRun)=>{
        if(error) return res.status(400).json({error: error.message});
        return res.status(200).json({
            userRun,
            requestedAt: new Date().toLocaleString(),
        })
    })
}
//create 
const create = (req,res)=>{
    db.userRun.create(req.body, (err, createUserRun)=>{
        if(err) return res.status(404).json({error: err.message});
        return res.status(200).json(createUserRun);
    })
}


//delete
const destroy = (req,res)=>{
    db.userRun.findByIdAndDelete(req.params.id, (error, deletedUserRun)=>{
        if(!deletedUserRun)
        return res.status(400).json({error: "Run not found"});
        if(error) return res.status(400).json({error:message});
        return res.status(200).json({
            message: `Run ${deletedUserRun.name} was deleted`,
        })
    })
}

//update
const update = (req,res)=>{
    db.userRun.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true},
        (err, updateUserRun)=>{
            if(err) return res.status(400).json({error: err.message});
            return res.status(200).json(updateUserRun);
        }
    )
}

module.exports= {index,  show, create, destroy, update};