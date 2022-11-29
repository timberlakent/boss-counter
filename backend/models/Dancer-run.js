
const mongoose = require("mongoose")

const DancerRunSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    runNumber: {type: Number},
    deaths: {type: Number},
    notes: {type: String}
})

const DancerRun = mongoose.model("Dancer-run", DancerRunSchema);

module.exports = DancerRun;