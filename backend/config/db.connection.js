const mongoose = require("mongoose");

const connectionStr = process.env.MONGO_URI;
mongoose.connect(connectionStr);

mongoose.connection.on("connected", () =>
console.log("DB CONNECTED!!!")
);

mongoose.connection.on("error", (err)=> console.log(err.message));

mongoose.connection.on("disconnected", ()=>
console.log("mongoose disconnected"));

