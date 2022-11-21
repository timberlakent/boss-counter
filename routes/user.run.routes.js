const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

router.get("/", (req,res)=> {
    res.send("home page")
})

router.get("/locations", (req,res)=>{
    res.send("All locations")
});

router.get("/cemetaryofash", (req,res)=>{
    res.send("cemetary of ash location")
});

router.get("/highwalloflothric", (req,res)=>{
    res.send("high wall location")
});

router.get("/undeadsettlement", (req,res)=>{
    res.send("undead settlement location")
});

// router.get("/cemetaryofash/Iudex-Gundyr", (req,res)=>{
//     res.send("first boss")
// });

router.get("/cemetaryofash/Iudex-Gundyr", ctrls.userRuns.index);

//create route
router.post("/cemetaryofash/Iudex-Gundyr", ctrls.userRuns.create);

module.exports = router;