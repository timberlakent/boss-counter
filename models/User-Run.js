//User Run Schema

const mongoose = require("mongoose")

const UserRunSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    runNumber: {type: number},
    deaths: {type: numebr},
    notes: {type: string}
})

const UserRun = mongoose.model("User-Run", UserRunSchema);

module.exports = UserRun;