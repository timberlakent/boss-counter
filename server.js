// req express
const express = require("express")

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || process.env.BACKEND_PORT || 3000;

require("./config/db.connection");

app.get("/", (req,res)=>{
    res.send("this is the landing page")
})
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connecting routes
const routes = require("./routes");
app.use('/', require("./routes/user.run.routes"))


app.listen(PORT, ()=>{
    console.log("Listening on Port 3000")
});
