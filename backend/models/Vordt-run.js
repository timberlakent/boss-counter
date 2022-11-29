// User Run Schema

const mongoose = require("mongoose")

const VordtRunSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    runNumber: {type: Number},
    deaths: {type: Number},
    notes: {type: String}
})

const VordtRun = mongoose.model("Vordt-run", VordtRunSchema);

module.exports = VordtRun;