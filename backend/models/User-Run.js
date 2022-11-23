//User Run Schema

const mongoose = require("mongoose")

const UserRunSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    runNumber: {type: Number},
    deaths: {type: Number},
    notes: {type: String}
})

const UserRun = mongoose.model("User-Run", UserRunSchema);

module.exports = UserRun;